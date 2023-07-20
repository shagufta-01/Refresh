let set;
let arr = [];
let storeTabId;
chrome.runtime.onMessage.addListener(function (req) {
  // console.log(req, "for req");
  if (req.message === "stop_btn") {
    console.log(set, "set------------");
    clearInterval(set);
  }
});
chrome.runtime.onMessage.addListener(function(req,tabId){
  //  console.log(req,tabId);
  if(req.message==="openLink"){
    console.log("objj");
    console.log(req.value, "For Reqvalue");
  storeTabId = req.value;
  console.log("reqqqqqqqqqqqqqq",storeTabId);
  }
})

// if (changeInfo.status === "active") {
//   // Tab has finished loading
chrome.runtime.onMessage.addListener(function (req, url) {
  // console.log(req, "for req");
  if (req.message === "start_btn") {
    let tabId = req.tab_id;
    let currentWin = url.id;
    console.log(currentWin, "currentWin");
    console.log(tabId, "tabId");
    console.log("object");



    console.log("working");
    console.log(req.value);
    const interval = req.value;
    async function reloadPage() {
      try {
        set = setInterval(() => {
          console.log("Started reload");
          console.log(interval + "completed");
          chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
              var activeTab = tabs[0];
              console.log(activeTab, "for activeTab");
            
              // Reload the active tab
console.log("object",storeTabId);
              chrome.tabs.reload(storeTabId);
            }
          );
        }, interval * 1000);
      } catch (err) {
        console.log(err);
      }
    }
    reloadPage();

    chrome.runtime.onMessage.addListener(function (req,tabId){
      if(req.message ==="LinkDisplay"){
     console.log( req.value); 
      }
    })  
    chrome.runtime.onMessage.addListener(function(req ,tabId){
      if (req.message == "recieve_msg") {
        console.log(req.value, "for reqvalue")
      }
    });
    
  }
});

// let storeWeb = window.location.href;
// console.log(storeWeb);

//   console.log("Tab fully loaded:", tabId);
//   // Do something with the fully loaded tab
// }chrome.tabs.onUpdate.addListener(function(tabId, changeInfo, tab) {
// Callback function that gets executed when a tab is updated

// // Perform actions based on the tab update
// console.log("Tab updated:", tabId);
// console.log("Change info:", changeInfo);
// console.log("Tab object:", tab);

// // Example: Check if the tab's status is "complete"
// if (changeInfo.status === "complete") {
//   // Tab has finished loading
//   console.log("Tab fully loaded:", tabId);
//   // Do something with the fully loaded tab
// }//

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.message === "Hello from popup") {
//     // Forward the message to the content script
//     chrome.scripting.executeScript({
//       target: { tabId: sender.tab.id },
//       files: ["content.js"]
//     });
//   }
// });
