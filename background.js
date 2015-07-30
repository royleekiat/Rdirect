
var min = 1;
var max = 2;
var current = min;

function run() {
  if (current >= max){
    current = min;
    chrome.browserAction.setIcon({path:"Rdirect.png"});

    chrome.storage.sync.set({
      direct: false
    }, function(items) {
      console.log("set off");
    });

    
  }else{

    chrome.tabs.executeScript(null,{
      file: 'Rdirect.js'
    });

    chrome.browserAction.setIcon({path:"Rdirect2.png"});
    current++;

    chrome.storage.sync.set({
      direct: true
    }, function(items) {
      //
    });

    chrome.tabs.onCreated.addListener(function(tab){
      chrome.tabs.executeScript(null,{
        file: 'Rdirect.js'
      });
    })

    chrome.tabs.onActivated.addListener(function(tab){
      chrome.tabs.executeScript(null,{
        file: 'Rdirect.js'
      });
    })

    chrome.tabs.onUpdated.addListener(function(tab){
      chrome.tabs.executeScript(null,{
        file: 'Rdirect.js'
      });
    })
    
    chrome.tabs.onAttached.addListener(function(tab){
      chrome.tabs.executeScript(null,{
        file: 'Rdirect.js'
      });
    })

    chrome.tabs.onReplaced.addListener(function(tab){
      chrome.tabs.executeScript(null,{
        file: 'Rdirect.js'
      });
    })

  }
}


chrome.browserAction.onClicked.addListener(run);




