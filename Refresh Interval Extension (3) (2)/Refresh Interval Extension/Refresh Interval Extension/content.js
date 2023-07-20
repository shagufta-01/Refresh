// chrrome.runtime.sendMessage
// chrome.runtime.onMessage.addListener(function (req) {
//   console.log(req, "for req");
//   if (req.message === "click_btn") {
//     alert("this is alert for click_btn");
//     console.log(req.value, "req.value");

//     let time_ = req.value *1000;
//     console.log(time_, "for time____")

//     setInterval(() => {
//       onloadata();
//     },time_ );
//   }
// });

// function onloadata(){
//   chrome.tabs.reload();
// }
// let name = "shagufta";
// let currentWi = localStorage.setItem(name);
// chrome.runtime.onMessage.addListener(function (req){
//     if (req.message ==="Hellooooo")
//     console.log(req , "refreshhhhhhhhhhhhhhhhhhh");
// })

// chrome.tabs.onMessage(function (reqq) {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

//     console.log(tabs[0].url, "tab[0].url");
//   });
// });
// Listen for messages from the popup script
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.message === "Hello from popup") {
//       // Do something in response to the message
//       console.log("Received message from popup:", request.message);
//     }
//   });

// Listen for messages from the popup script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "Hello from popup") {
    // Do something in response to the message
    console.log("Received message from popup:", request.message);
    localStorage.setItem("hello",request.value)
  }
  localStorage.getItem(value);
});
