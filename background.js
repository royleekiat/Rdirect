
var min = 1;
var max = 2;
var current = min;

function run() {
  if (current >= max){
    console.log("off" + current);
    current = min;
    chrome.browserAction.setIcon({path:"Rdirect.png"});
    chrome.tabs.executeScript(null,{
      file: 'Undirect.js'
    });

    chrome.tabs.onCreated.addListener(function(tab){
      chrome.tabs.executeScript(null,{
        file: 'Undirect.js'
      });
    })

    chrome.tabs.onActivated.addListener(function(tab){
      chrome.tabs.executeScript(null,{
        file: 'Undirect.js'
      });
    })

    chrome.tabs.onUpdated.addListener(function(tab){
      chrome.tabs.executeScript(null,{
        file: 'Undirect.js'
      });
    })
    
    chrome.tabs.onAttached.addListener(function(tab){
      chrome.tabs.executeScript(null,{
        file: 'Undirect.js'
      });
    })

    chrome.tabs.onReplaced.addListener(function(tab){
      chrome.tabs.executeScript(null,{
        file: 'Undirect.js'
      });
    })
  }else{

    console.log("on" + current);
    chrome.tabs.executeScript(null,{
      file: 'Rdirect.js'
    });

    chrome.browserAction.setIcon({path:"Rdirect2.png"});
    current++;

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




