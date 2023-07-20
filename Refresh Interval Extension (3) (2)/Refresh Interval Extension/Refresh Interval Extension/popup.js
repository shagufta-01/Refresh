let resetButton = document.getElementById("reset");
let stBtn = document.getElementById("start");
let stobtn = document.getElementById("stop");
let inpBtn = document.getElementById("interval");
let arr = []

chrome.tabs.query({ currentWindow: true }, function (tabs) {
  var tabList = document.getElementById("linkDis");

  tabs.map((item, index) => {
    console.log(index, "index");
    console.log(item, "for item");
    chrome.runtime.sendMessage({
      message: "LinkDisplay",
      value: item.Id,
    });
    var option = document.createElement("option");
    option.textContent = item.url;
    option.value = item.url;
    option.id = `${index + "id"}`;
    let storeId = item.id;
    option.className = "display";
    tabList.appendChild(option);
  });
});

console.log(inpBtn);

resetButton.addEventListener("click", () => {
  inpBtn.value = "0";
  chrome.runtime.sendMessage({
    message: "stop_btn",
  });
});

stobtn.addEventListener("click", () => {
  console.log("clickeddddddddddddddd");
  chrome.runtime.sendMessage({
    message: "stop_btn",
  });
});

stBtn.addEventListener("click", () => {
  console.log("object");
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let currentWin = tabs[0].url;
    console.log(tabs, "for tabs--------------");
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      // Do something with url
    });
    //  let arr =[];
    //  let url ;

    console.log(currentWin);
    currentTabId = tabs[0].id;
    chrome.runtime.sendMessage({
      message: "start_btn",
      value: parseInt(inpBtn.value),
      id: currentWin,
      tab_id: currentTabId,
    });
  });
});

// const activeTab = chrome.tabs.getActiveTab();
// const url = String(e.target.value);
// chrome.tab.update(activeTab, {url:e.target.value});

// chrome.tab.update(active,{url:e.target.value});
// console.log("yyyyyyy")
// chrome.tabs.query({ currentWindow: true }, function(tabs) {
//   tabs.map(item=>{
//     console.log(item, "for item")

//     chrome.runtime.sendMessage(
//       {
//         message : "LinkDisplay",
//         value : item.Id

//       }
//     )

//         })
// }
// )

// Send a message to the content script
chrome.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, {
    message: "Hello from popup",
    value: 23,
  });
});

chrome.runtime.sendMessage({ message: "" });
const message = {
  text: "Hello, background script!",
  value: 42,
};

// function refresh() {

//   let interval = document.getElementById("interval").value;
//   console.log(interval, "for interval");

//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     chrome.tabs.sendMessage(tabs[0].id, {
//       message: "click_btn",
//       value: inpBtn,
//     });
//   });




let linkDisplay = document.getElementById("linkDis");
linkDisplay.addEventListener("change", () => {
  console.log("this is console for linkdisplasmmfkmf>>>");

  chrome.tabs.query({ currentWindow: true }, function (tabs) {
    var tabList = document.getElementById("linkDis");
    let a =  linkDisplay.options[linkDisplay.selectedIndex];
    // console.log(a, "scscscscs");
    console.log(a.id  , "scscscscs", typeof a.id);
    let get = a.id.substr(0,1);
    console.log(get, "for get");
    let b = +get;
    console.log(b,"for b");
    


  
    tabs.map((item, index) =>{
     if(index==b){
      console.log(item,"itemm>>>>>>>>>>>>>>>>>>>>>")
      console.log(b,">>>>>>>>>>>>>>>>>>>>>>>.");
        chrome.runtime.sendMessage({
          message : "recieve_msg"
        });
     }
    });
  });
});
