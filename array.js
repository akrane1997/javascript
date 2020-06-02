var a=[4,5,3,2,6,1]
var b=['a','b','c'];
var c=[1,'a',2,'b',3];


for (var i = 0; i < a.length; i++) {
  console.log(a[i]);
}

console.log(a.reverse());
console.log(a.sort());
console.log(a.length);
console.log(a.concat(b,c));

var y=new Date();

var months=['jan','feb','mar','april','may','june','july','aug','sept','oct','nov','dec'];
var x=y.getMonth();
console.log(months[x]);
