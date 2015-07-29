var d = document;
d.body.addEventListener('dblclick',function(){
	chrome.storage.sync.get({
	    RdirectURL: "http://www.google.com"
	  }, function(items) {
	    window.location = items.RdirectURL;
	  });
	window.location = "http://www.bbc.com/news";
});

//set timeout then Rdirect to default page