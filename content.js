// content.js
document.addEventListener('contextmenu', function(e) {
    let element = e.target;
    let text = element ? element.innerText : '';
    chrome.runtime.sendMessage({text: text});
});