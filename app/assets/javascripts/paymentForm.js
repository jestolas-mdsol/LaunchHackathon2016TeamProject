(function paymentModal() {

	// file = location.pathname.split( "/" ).pop();

	// link = document.createElement( "link" );
	// // link.href = file.substr( 0, file.lastIndexOf( "." ) ) + ".css";
	// link.href = "../stylesheets/modal.css";
	// link.type = "text/css";
	// link.rel = "stylesheet";

	// document.getElementsByTagName( "head" )[0].appendChild( link );

	// TODO: 
	// Make payemnt go to appropriate vendor
	// 

	var 
	pay = document.getElementById('pay'),
	divOpen = "<div id='formModal'>",
	formOpen = "<form type='POST' action='/payment' id='pmtForm'>",
	closeButton = "<span id='close>x</span>",
	emailInput = "<input type='text' placeholder='Email Address' name='email' /><br>",
	ccInput = "<input type='text' placeholder='Credit Card Number' name='ccNumber' /><br>",
	cvvInput = "<input type='text' placeholder='CVV' name='cvv' /><br>",
	submitButton = "<input type='submit' value='Submit' />",
	formClose = "</form>",
	divClose = "</div><br>",
	checkoutBtn = "<button id='checkoutBtn'>Pay using our platform.</button>",
	content = divOpen + formOpen + closeButton + emailInput + ccInput + cvvInput + submitButton + formClose + divClose


	pay.innerHTML = content + checkoutBtn;


	// Get the modal
	var modal = document.getElementById('formModal');

	// Get the button that opens the modal
	var btn = document.getElementById("checkoutBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementById("close");

	// When the user clicks on the button, open the modal 
	btn.addEventListener('click', function() {
	    modal.style.display = "block";
	    console.log("it works");
	})

	// When the user clicks on <span> (x), close the modal
	// span.addEventListener('click', function() {
	// 	console.log("span clicked");
	//     modal.style.display = "none";
	// })

	// When the user clicks anywhere outside of the modal, close it
	// window.addEventListener('click', function(event) {
	//     if (event.target == modal) {
	//     	console.log("Clicked outside modal");
	//         modal.style.display = "none";
	//     }
	// })

})()