function domReady () {
	document.body.className += " javascript";

	// JavaScript demonstration
	var changeBg = function (event) {
	    console.log("method called");
	    var me = event.target
	    	, square = document.getElementById("square");
	    square.style.backgroundColor = "#ffaa44";
	    me.setAttribute("disabled", "disabled");
	    setTimeout(function () { 
	    	clearDemo(me) 
	    }, 2000);
	}

	function clearDemo(button) {
	    var square = document.getElementById("square");
	    square.style.backgroundColor = "transparent";
	    button.removeAttribute("disabled");
	}

	var button = document.querySelector("button");
	console.log(button);
	button.addEventListener("click", changeBg);
}

// Mozilla, Opera, Webkit 
if ( document.addEventListener ) {

  document.addEventListener( "DOMContentLoaded", function(){
    document.removeEventListener( "DOMContentLoaded", arguments.callee, false);
    domReady();
  }, false );

// If IE event model is used
} else if ( document.attachEvent ) {
	
  // ensure firing before onload
  document.attachEvent("onreadystatechange", function(){
    if ( document.readyState === "complete" ) {
      document.detachEvent( "onreadystatechange", arguments.callee );
      domReady();
    }
  });
}