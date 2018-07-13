
let mathsMarks= 20;
let engMarks= 10;
let compMarks= 15;

let maxMath;
let maxEng;
let maxComp;

function add(){
	let marks1=parseInt(document.querySelector("#numb1").value);
	let marks2=parseInt(document.querySelector("#numb2").value);
	let marks3=parseInt(document.querySelector("#numb3").value);

	if (marks1>mathsMarks && marks2>engMarks  && marks3>compMarks){
		alert("pass");
	} else{
		alert("fail");
	}
}


