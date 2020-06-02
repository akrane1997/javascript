var john={
  firstName:'john',
  lastName:'smith',
  birthYear:1997,
  family:['dhiraj','rajendra','amol','saroj'],
  job:'developer',
  isMarid:'false'
};
console.log(john);
console.log(john.lastName);
console.log(john['firstName']);
var x='birthYear';
console.log(john['birthYear']);

//Object and methods
var john={
  firstName:'john',
  lastName:'smith',
  birthYear:1997,
  family:['dhiraj','rajendra','amol','saroj'],
  job:'developer',
  isMarid:'false',
  valAge:function(){
    this.age=2018-this.birthYear;
  }
};
john.valAge();
console.log(john);
