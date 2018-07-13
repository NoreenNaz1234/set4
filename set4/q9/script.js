function setUp() {
      userInput = parseInt(document.querySelector("#num1").value);
      userInput1 = parseInt(document.querySelector("#num2").value);

}
function sum(){
	setUp()
	alert(userInput + userInput1);
}

function dif(){
	setUp()
	alert(userInput - userInput1);
}
 
function multi(){
	setUp()
	alert(userInput * userInput1);
}

function div(){
	setUp()
	alert(userInput / userInput1);
}


function rem(){
	setUp()
	alert(userInput % userInput1);
}

