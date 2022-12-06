// popup.js

array_url = ["https://www.google.com/", "dadds", ""]

document.addEventListener('DOMContentLoaded', function() {
    var leaveButton = document.getElementById('no');
    var proceedButton = document.getElementById('yes');
    var submitButton = document.getElementById('submit');
    var closeButton = document.getElementById('close');
    var adButton = document.getElementById('ad');

    var currentURL = window.location.href;

    leaveButton.addEventListener('click', function() {
     alert("Going back to safety ... ");
    }, false);

    proceedButton.addEventListener('click', function(){
      alert("Proceeding to website ... ");
    }, false);

    submitButton.addEventListener('click', function(){
      alert("Your feedback was send!");
    }, false);

    closeButton.addEventListener('click', function(){
      window.close();
    }, false)

    adButton.addEventListener('click', function(){
      alert("Sending to <AD URL> ...");
    }, false)

    
  }, false);