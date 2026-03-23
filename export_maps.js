const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
    const page = await browser.newPage();
    
    // Set 16:9 aspect ratio standard for PPT
    await page.setViewport({ width: 1440, height: 810 });
    
    const filePath = `file://${path.resolve(__dirname, 'index.html')}`;
    await page.goto(filePath, { waitUntil: 'networkidle0' });

    const techOptions = [
        { id: 'ground', name: 'Ground-mounted_Solar_PV' },
        { id: 'rooftop', name: 'Rooftop_Solar_PV' },
        { id: 'onshore', name: 'Onshore_Wind' },
        { id: 'offshore', name: 'Offshore_Wind' },
        { id: 'co2', name: 'CO2_Mechanisms' }
    ];

    for (const tech of techOptions) {
        console.log(`Processing ${tech.name}...`);
        
        await page.evaluate((techId) => {
            return new Promise((resolve) => {
                const select = document.getElementById('tech-select');
                select.value = techId;
                select.dispatchEvent(new Event('change'));

                const titleBox = document.querySelector('.title-box');
                if (titleBox) titleBox.style.display = 'none';
                
                const infoPanel = document.querySelector('.info-panel');
                if (infoPanel) infoPanel.style.display = 'none';

                const zoomControl = document.querySelector('.leaflet-control-zoom');
                if (zoomControl) zoomControl.style.display = 'none';
                
                const attrControl = document.querySelector('.leaflet-control-attribution');
                if (attrControl) attrControl.style.display = 'none';

                const legend = document.querySelector('.legend');
                const topLeftContainer = document.querySelector('.leaflet-top.leaflet-left');
                if (legend && topLeftContainer && legend.parentElement !== topLeftContainer) {
                    topLeftContainer.appendChild(legend);
                    legend.style.marginTop = '20px';
                    legend.style.marginLeft = '20px';
                }

                let dataBounds = window.L.latLngBounds();
                
                window.geojsonLayer.eachLayer((layer) => {
                    const iso = (layer.feature.properties.LEVL_CODE === 1) 
                        ? layer.feature.properties.NUTS_ID 
                        : (layer.feature.properties.NUTS_ID || layer.feature.properties.CNTR_ID);
                    const data = getCountryInfo(iso);
                    
                    if (data.category === 'Information not available / N/A' || data.category === undefined) {
                        layer.setStyle({ opacity: 0, fillOpacity: 0 });
                    } else {
                        dataBounds.extend(layer.getBounds());
                    }
                });

                if (dataBounds.isValid()) {
                    window.map.fitBounds(dataBounds, { padding: [50, 50], animate: false });
                }

                // Wait for the tile loading to finish after fitBounds
                setTimeout(resolve, 1500);
            });
        }, tech.id);
        
        const fileName = `export_${tech.name}.png`;
        await page.screenshot({ path: fileName });
        console.log(`Saved ${fileName}`);
    }

    await browser.close();
})();
