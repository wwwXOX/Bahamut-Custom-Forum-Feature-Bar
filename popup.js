document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggle-switch');

    // Get the extension status from storage
    chrome.storage.sync.get(['extensionEnabled'], (result) => {
        // Default to off
        const isEnabled = result.extensionEnabled !== undefined ? result.extensionEnabled : false;
        toggleSwitch.checked = isEnabled;
    });

    toggleSwitch.addEventListener('change', () => {
        const isEnabled = toggleSwitch.checked;
        chrome.storage.sync.set({ extensionEnabled: isEnabled });

        // Send a message to content script to update status
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { extensionEnabled: isEnabled });
        });
    });
});
