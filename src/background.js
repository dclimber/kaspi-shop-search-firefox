// * add context menu
let title = browser.i18n.getMessage("contextTitle");

browser.contextMenus.create({
    id: "kaspiShop",
    title: `${title} '%s'`,
    contexts: ["selection"],

    icons: {
        "16": "icons/kaspiShop16.png",
        "32": "icons/kaspiShop32.png",
        "48": "icons/kaspiShop48.png",
        "96": "icons/kaspiShop96.png"
    }
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    let highlightedText = info.selectionText.toString();
    // Convert selected text to: "user+selected+text"
    let searchText = highlightedText.trim().split(" ").join("+");
    let kaspiShopURL = `https://kaspi.kz/shop/search/?text=${searchText}`;
    // open new tab with search url
    browser.tabs.create({
        url: kaspiShopURL
    });
});
