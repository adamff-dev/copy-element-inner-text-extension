document.addEventListener('mousedown', (event) => {
    if (event.button == 2) {
        let element = event.target;
        let text = element ? element.innerText : '';
        chrome.runtime.sendMessage({ text });
    }
}, { capture: true }); // Capture phase to ensure we get the event before any other handlers
