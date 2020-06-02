var john=['john','smith',1988,'designer',false,'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if(typeof john[i] !== 'string')continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if(typeof john[i] !== 'string')break;
  console.log(john[i]);
}

for (var i =john.length-1;i>=0; i--) {
console.log(john[i]);
}
