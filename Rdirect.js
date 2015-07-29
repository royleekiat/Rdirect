var d = document;
d.body.addEventListener('dblclick',function(){
	chrome.storage.sync.get({
	    RdirectURL: "http://www.google.com",
	    direct: "true"
	  }, function(items) {
	  	if(items.direct){
	    	window.location = items.RdirectURL;
	  	}
	  });
});

//set timeout then Rdirect to default page