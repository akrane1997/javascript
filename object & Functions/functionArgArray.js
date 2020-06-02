var years = [1990,1997,1937,2005,1990];

function arrayCal(arr,fn) {
  var arrRes = [];
  for(var i = 0; i < arr.length;i++){
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 -el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if(el >= 18 && el <= 81){
    return Math.round(206.9 - (0.67 * el));
  }
  else {
    return -1;
  }
}


var ages = arrayCal(years,calculateAge);
var fullAges = arrayCal(ages,isFullAge);
var rates = arrayCal(ages,maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
