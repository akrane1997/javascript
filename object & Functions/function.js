var john={
  name:'john',
  yearOfBirth:1997,
  job:'teacher'
};

var Person = function(name,yearOfBirth,job){
  this.name=name;
  this.yearOfBirth=yearOfBirth;
  this.job=job;

}

Person.prototype.calculateAge =function(){
  console.log(2016-this.yearOfBirth);
}

Person.prototype.lastName = 'rane';
var john = new Person('john',1990,'teacher');
var jane = new Person('jane',1968,'designer');
var mark = new Person('mark',1997,'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
