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
	if($(".timeQuestion").val() == "none"){
		$(".WhenWork").css('color', 'red');
	}
   });

   $('#buttonWhere').click(function(e) {
 	if($(".gymQuestion").val() == "none"){
		 console.log("woob");
	 $(".WhereWork").css('color', 'red');
	 }
	});
	 
	 $('#buttonLevel').click(function(e) {
		if($(".LevelQuestion").val() == "none"){
			console.log("woob");
		$(".WhatLevel").css('color', 'red');
		}
});

   
}
