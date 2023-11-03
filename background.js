let clickedElText = '';

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    clickedElText = message.text;
});

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "copyElementText",
        title: "Copy element inner text",
        contexts: ["all"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "copyElementText") {
        copyTextToClipboard(clickedElText, tab);
    }
});

function copyTextToClipboard(text, tab) {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: functionToInject,
        args: [text]
    }, function() {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        }
    });
}

function functionToInject(text) {
    simplecopy(text);
}
