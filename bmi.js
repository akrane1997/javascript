var massMark =78; //kg
var heightMark=1.69 //meters

var massJohn=92;
var heightJohn=1.95;

var BMIMark=massMark / (heightMark * heightMark);
var BMIJohn=massJohn / (heightJohn * heightJohn);
console.log(BMIMark,BMIJohn);

var markHeigherBMI =BMIMark > BMIJohn;
console.log("Is Mark's BMI heigher than John's?" +markHeigherBMI);
