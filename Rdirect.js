console.log("started");
var d = document;
d.body.addEventListener('click',function(){
	chrome.storage.sync.get({
	    RdirectURL: "http://www.google.com"
	  }, function(items) {
	    window.location = items.RdirectURL;
	  });
	window.location = "http://www.bbc.com/news";
//chrome.tabs.update(tab.id, {url: "http://www.google.com"});
});