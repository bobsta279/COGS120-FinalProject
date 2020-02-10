require("./posts.json")

var rimac = false;
var mainGym = false;
var beginner = false;
var intermediate = false;
var advanced = false;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$(".searchButton").click(function(e) {
    e.preventDefault();
    if($(".RIMAC").prop("checked") == true){
        rimac = true;
        console.log("rimac has been check my guy");
        
    }
    if($(".mainGym").prop("checked") == true){
        mainGym = true;
        console.log("rimac has been check my guy");
    }
    if($(".beg").prop("checked") == true){
        beginner = true;
        console.log("rimac has been check my guy");
    }
    if($(".inter").prop("checked") == true){
        intermediate = true;
        console.log("rimac has been check my guy");
    }

    
    
  });
}
