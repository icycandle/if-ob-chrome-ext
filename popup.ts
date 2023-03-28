import { sharedFunction } from './lib';

document.addEventListener('DOMContentLoaded', () => {
  const hideButton = document.getElementById('hideButton') as HTMLButtonElement;
  if (hideButton) {
    hideButton.addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0].id) {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['dist/content.js'],
          });
        }
      });
    });
  }

  sharedFunction();
});
