$( document ).ready( function() {

	console.log("document is ready!");

	var looping = false;

	// jQuery can help you select HTML elements on your page
	var $button = $(".button");
	var $project = $(".project");
				//$("p")
				//$("#myID")


	// set up button events
	$button.on("click", function(event) {
		event.stopPropagation();

		if ( !looping ) {
			animateButton(this);
		}
		else {
			looping = false;
			$(this).stop(true, true);
		}
	});

	// project click
	$project.click(function(event) {
		
		toggleDiv(this);

	});

	// jQuery makes animations easy
	var animateButton = function(el) {
		looping = true;

		$(el).animate({
		  	marginLeft: "10px",
		    opacity: 0.25
		}, 500, function() {
		    // Animation complete.
		  	$(el).animate({
		  		marginLeft: "0",
		  		opacity: 1
		  	}, 500, animateButton(el));
		});

	}

	var toggleDiv = function(el) {
		
		var height = $(el).css("height");

		if ( height == "30px" ) {
			$(el).animate({
			  	height: "400px"
			}, 500);
		}
		else {
			$(el).animate({
			  	height: "30px"
			}, 500);
		}

	}

	// Boostrap gives you some things like slideshow/carousels

	// CAROUSEL LOGIC
	$('#theCarousel').carousel({
	  interval: false
	})

	$('.multi-item-carousel .item').each(function(){
	  var next = $(this).next();
	  if (!next.length) {
	    next = $(this).siblings(':first');
	  }
	  next.children(':first-child').clone().appendTo($(this));
	  
	  if (next.next().length>0) {
	    next.next().children(':first-child').clone().appendTo($(this));
	  }
	  else {
	  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	  }
	});

	// LIGHTBOX LOGIC
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	// FLEXBOX NAV LOGIC
	$(".vertical-nav").on("mouseover", function() {
		$(this).find('#works').animate({
			bottom: '40px'
		}, 500);
	// 	$(this).toggle(function(){
	// 	    $(this).animate({height:140},200);
	// 	},function(){
	// 	    $(this).animate({height:10},200);
	// 	});
	});
	
	
	
	// jQuery also makes it easy to make AJAX (asynchronous json and xml) calls
	// var $data;

	// $.get( "../data/samples.json", function( data ) {
	//   $data = data;

		// for (var i=0; i<$data.length; i++) {
		// 	$data[i]
		// }
		
	//   initBoard();
	// });
	// function initBoard() {
	// 	$button.on("mouseover", function() {
	// 		$(this).addClass("ok");
	// 	});
	// 	$button.on("mouseout", function() {
	// 		$(this).removeClass("ok");
	// 	});
	// }


} );