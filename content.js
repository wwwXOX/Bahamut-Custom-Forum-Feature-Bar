function searchByTitle() {
    const query = prompt("Enter the title to search");
    if (query) {
        const encodedQuery = query.length === 1 ? `%5C${query}` : query;
        const bsn = getQueryString("bsn");
        if (bsn) {
            window.location.href = `https://forum.gamer.com.tw/B.php?bsn=${bsn}&qt=1&q=${encodedQuery}`;
        }
    }
}

function searchByAuthor() {
    const author = prompt("Enter the author to search");
    if (author && author.length !== 1) {
        const bsn = getQueryString("bsn");
        if (bsn) {
            window.location.href = `https://forum.gamer.com.tw/Bo.php?bsn=${bsn}&qt=6&q=${author}&sort=1`;
        }
    }
}

function addMenuItems() {
    createMenuItem("🔍", searchByTitle);
    createMenuItem("👤", searchByAuthor);
}

function init() {
    chrome.storage.sync.get(['extensionEnabled'], (result) => {
        if (result.extensionEnabled) {
            addMenuItems();
        }
    });
}

window.addEventListener('load', init);
window.addEventListener('DOMContentLoaded', init);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.extensionEnabled !== undefined) {
        if (message.extensionEnabled) {
            addMenuItems();
        } else {
            document.querySelectorAll(".BH-menuE li").forEach(li => {
                if (li.querySelector("a")?.innerText === "🔍" || li.querySelector("a")?.innerText === "👤") {
                    li.remove();
                }
            });
        }
    }
});
