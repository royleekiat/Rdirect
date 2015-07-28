// document.addEventListener('DOMContentLoaded', function() {
//   var initButton = document.getElementById('initiate');
//   initButton.addEventListener('click', function() {
//     var url = document.getElementById('url').value;
//     console.log("begun");
//     //chrome.tabs.query({active: true},function(tab){
      
//      chrome.tabs.executeScript(null,{
//         file: 'Rdirect.js'
//       });

      
//     //});
//   }, false);
// }, false);

function save_options() {
  var url = document.getElementById('url').value;
  chrome.storage.sync.set({
    RdirectURL: url
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    RdirectURL: "http://www.google.com"
  }, function(items) {
    document.getElementById('url').value = items.RdirectURL;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);