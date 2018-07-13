let isLoggedIn = true;   




function logIn() {
	let userInput =document.querySelector("input").value;
	if (isLoggedIn === true){
		alert ("welcome " + userInput);
	}

}