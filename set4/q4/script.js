let costOfApple=10;
let costOfbanana=15;
let costOfMango= 8;

let noOfApple;
let noOfBanana;
let noOfMango;



function totalCost(){
     noOfApple=parseInt(document.querySelector("#apple").value);
     noOfBanana=parseInt(document.querySelector("#banana").value);
     noOfMango=parseInt(document.querySelector("#mango").value);
     let totalCost2= costOfApple * noOfApple + costOfbanana * noOfBanana + costOfMango + noOfMango;
     alert (totalCost2);
 }

