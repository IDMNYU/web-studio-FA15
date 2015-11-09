$( document ).ready(function() {

	console.log("document is ready!");

	var $a = $("a");

	// set up button events
	// $a.click(function( event ) {
	// 	alert( "The link will no longer take you to jquery.com" );
	// 	event.preventDefault();

		$(this).hide( 300 );
	// });

	// jQuery can help you select HTML elements on your page
	// and add and remove classes
	$a.addClass("pink");
	$a.removeClass("pink");


	// jQuery makes animations easy


	// jQuery also has built in methods for making AJAX calls
	
	
});