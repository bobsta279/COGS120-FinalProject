// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#loginContinue").toggle();
	$(".searchButton").click(function(e) {
  });

   $('#buttonWhen').click(function(e) {
	   console.log("Woob");
	if($(".timeQuestion").val() == "none"){
		$(".WhenWork").css('color', 'red');
	}
   });
}
