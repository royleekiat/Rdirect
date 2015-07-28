
var min = 1;
var max = 2;
var current = min;

function run() {
  if (current >= max){
    current = min;
    chrome.browserAction.setIcon({path:"Rdirect.png"});
  }else{
    chrome.tabs.executeScript(null,{
      file: 'Rdirect.js'
    });
    chrome.browserAction.setIcon({path:"Rdirect2.png"});
    current++;
  }
}

chrome.browserAction.onClicked.addListener(run);




