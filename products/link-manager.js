console.log("link-manager.js loaded");
window.funkoLinks = {};

async function loadFunkoLinks() {

    try {

        const response = await fetch("data/funko_links.csv");

        const csvText = await response.text();

        const rows = csvText.split("\n");

        rows.slice(1).forEach(row => {

            const columns = row.split(",");

            const id = columns[0]?.trim();

            if(id){

                funkoLinks[id] = {
                    shopee: columns[2]?.trim(),
                    lazada: columns[3]?.trim()
                };

            }

        });

        console.log("Funko links loaded:", funkoLinks);

    } catch(error) {

        console.error("CSV loading error:", error);

    }

}