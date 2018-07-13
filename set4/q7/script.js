let speed =60;   




function check() {
	let userInput =document.querySelector("input").value;
	if (userInput >= speed){
		alert ("OverSpeeding");
	} else{
		alert("Not");
	}

}