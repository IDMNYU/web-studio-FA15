$( document ).ready(function() {

	console.log("document is ready!");

	// jQuery can help you select HTML elements on your page
	var $button = $(".button");

	// set up button events
	$button.click(function( event ) {
		//alert( "The link will no longer take you to jquery.com" );
		//event.preventDefault();

		// and animate, fade out, fade in, add and remove classes
		$(this).hide( 300 ).delay(500).toggleClass("error").show(300);
	});


	// jQuery makes animations easy


	// jQuery also has built in methods for making AJAX calls
	
	
});