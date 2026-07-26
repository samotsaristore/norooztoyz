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

        console.error("Funko CSV loading error:", error);

    }

}





window.hotwheelsLinks = {};

async function loadHotWheelsLinks() {

    try {

        const response = await fetch("data/hotwheels_links.csv");

        const csvText = await response.text();

        const rows = csvText.split("\n");

        rows.slice(1).forEach(row => {

            const columns = row.split(",");

            const id = columns[0]?.trim();

            if(id){

                hotwheelsLinks[id] = {

                    shopee: columns[2]?.trim(),

                    lazada: columns[3]?.trim()

                };

            }

        });

        console.log("Hot Wheels links loaded:", hotwheelsLinks);


    } catch(error) {

        console.error("Hot Wheels CSV loading error:", error);

    }

}





window.animeLinks = {};

async function loadAnimeLinks() {

    try {

        const response = await fetch("data/anime_links.csv");

        const csvText = await response.text();

        const rows = csvText.split("\n");

        rows.slice(1).forEach(row => {

            const columns = row.split(",");

            const id = columns[0]?.trim();

            if(id){

                animeLinks[id] = {

                    shopee: columns[2]?.trim(),

                    lazada: columns[3]?.trim()

                };

            }

        });

        console.log("Anime links loaded:", animeLinks);


    } catch(error) {

        console.error("Anime CSV loading error:", error);

    }

}





window.marvelLinks = {};

async function loadMarvelLinks() {

    try {

        const response = await fetch("data/marvel_links.csv");

        const csvText = await response.text();

        const rows = csvText.split("\n");

        rows.slice(1).forEach(row => {

            const columns = row.split(",");

            const id = columns[0]?.trim();

            if(id){

                marvelLinks[id] = {

                    shopee: columns[2]?.trim(),

                    lazada: columns[3]?.trim()

                };

            }

        });

        console.log("Marvel links loaded:", marvelLinks);


    } catch(error) {

        console.error("Marvel CSV loading error:", error);

    }

}

window.electronicsLinks = {};

async function loadElectronicsLinks() {

    try {

        const response = await fetch("data/electronics_links.csv");

        const csvText = await response.text();

        const rows = csvText.split("\n");

        rows.slice(1).forEach(row => {

            const columns = row.split(",");

            const id = columns[0]?.trim();

            if(id){

                electronicsLinks[id] = {

                    shopee: columns[2]?.trim(),

                    lazada: columns[3]?.trim()

                };

            }

        });

        console.log("Electronics links loaded:", electronicsLinks);

    } catch(error) {

        console.error("Electronics CSV loading error:", error);

    }

}
window.electronicsLinks = {};

async function loadElectronicsLinks() {

    try {

        const response = await fetch("data/electronics_links.csv");

        const csvText = await response.text();

        const rows = csvText.split("\n");

        rows.slice(1).forEach(row => {

            const columns = row.split(",");

            const id = columns[0]?.trim();

            if(id){

                electronicsLinks[id] = {

                    shopee: columns[2]?.trim(),

                    lazada: columns[3]?.trim()

                };

            }

        });

        console.log("Electronics links loaded:", electronicsLinks);

    } catch(error) {

        console.error("Electronics CSV loading error:", error);

    }

}