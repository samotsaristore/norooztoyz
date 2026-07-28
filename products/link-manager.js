console.log("link-manager.js loaded");

// 1. Single source of truth for all categories and their files
const CATEGORIES = {
    funko: "funko_links.csv",
    hotwheels: "hotwheels_links.csv",
    anime: "anime_links.csv",
    marvel: "marvel_links.csv",
    dc: "dc_links.csv",
    electronics: "electronics_links.csv",
    anikAnik: "anik-anik_links.csv",
    otherCollectibles: "othercollectibles_links.csv"
};

// 2. Initialize empty objects on the window object dynamically
Object.keys(CATEGORIES).forEach(category => {
    window[`${category}Links`] = {};
});

/**
 * Core dynamic function to fetch and parse any CSV link file
 * @param {string} categoryKey - The key from the CATEGORIES configuration object
 */
async function loadLinksForCategory(categoryKey) {
    const fileName = CATEGORIES[categoryKey];
    if (!fileName) {
        console.error(`Category key "${categoryKey}" not found in configuration.`);
        return;
    }

    try {
        const response = await fetch(`data/${fileName}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const csvText = await response.text();
        // Split by newlines, handling both Windows (\r\n) and Unix (\n) line endings
        const rows = csvText.split(/\r?\n/); 

        rows.slice(1).forEach(row => {
            if (!row.trim()) return; // Skip empty rows

            const columns = row.split(",");
            const id = columns[0]?.trim();

            if (id) {
                window[`${categoryKey}Links`][id] = {
                    shopee: columns[2]?.trim() || "",
                    lazada: columns[3]?.trim() || ""
                };
            }
        });

        console.log(`${categoryKey} links loaded:`, window[`${categoryKey}Links`]);

    } catch (error) {
        console.error(`${categoryKey} CSV loading error:`, error);
    }
}

// 3. Keep the original function names for backwards compatibility
window.loadFunkoLinks = () => loadLinksForCategory('funko');
window.loadHotWheelsLinks = () => loadLinksForCategory('hotwheels');
window.loadAnimeLinks = () => loadLinksForCategory('anime');
window.loadMarvelLinks = () => loadLinksForCategory('marvel');
window.loadDCLinks = () => loadLinksForCategory('dc');
window.loadElectronicsLinks = () => loadLinksForCategory('electronics');
window.loadAnikAnikLinks = () => loadLinksForCategory('anikAnik');
window.loadOtherCollectiblesLinks = () => loadLinksForCategory('othercollectibles');
