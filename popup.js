document.addEventListener("DOMContentLoaded", function() {
  const titleElement = document.getElementById("title");
  const fetchButton = document.getElementById("fetchTitle");

  fetchButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const currentTab = tabs[0];
      const currentTabTitle = currentTab.title;
      titleElement.textContent = currentTabTitle;
    });
  });
});
