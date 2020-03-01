// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	/*$("#dropWhen").click(function(e){
		$pls = $("#dropWhen").val() + "";
	});  


	console.log($pls);

	if(pls == "in 1-2 hours"){
		$('#dropWhen').val("in 1-2 hours");
	} else if(pls == "in 2-4 hours"){
		$('#dropWhen').val("in 2-4 hours");
	} else if(pls == "in 5-6 hours"){
		$('#dropWhen').val("in 5-6 hours");
	} else if(pls == "in 7-8 hours"){
		$('#dropWhen').val("in 7-8 hours");
	} else {
		$('#dropWhen').val("none");
	}*/



	$("#loginContinue").toggle();
	

   $('#buttonWhen').click(function(e) {
	if($("#timeQuestion").val() == "none"){
		$(".WhenWork").css('color', 'red');
	}
   });

   $('#buttonWhere').click(function(e) {
 	if($("#gymQuestion").val() == "none"){
		 console.log("woob");
	 $(".WhereWork").css('color', 'red');
	 }
	});
	 
	 $('#buttonLevel').click(function(e) {
		if($("#LevelQuestion").val() == "none"){
			console.log("woob");
		$(".WhatLevel").css('color', 'red');
		}
	});

	$('#saveUser').click(function(e) {
		if($(".firstName").val() == ""){
			console.log("woobName");
			$(".firstNameT").css('color', 'red');
		} else {
			$(".firstNameT").css('color', 'black');
		}
		if($(".lastName").val() == ""){
			console.log("woobName2");
			$(".lastNameT").css('color', 'red');
		} else {
			$(".lastNameT").css('color', 'black');

		}

		if($(".phoneNumber").val() == ""){
			$(".phoneNumberT").css('color', 'red');
		} else {
			$(".phoneNumberT").css('color', 'black');
		}
	});

	 
}
