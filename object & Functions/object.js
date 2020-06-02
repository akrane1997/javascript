//object create

var personProto={
  calculateAge: function(){
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = '1990';
john.job = 'teacher';

var jane =Object.create(personProto,
  {
  name: { value:'jane' },
  yearOfBirth: { value:'1988' },
  job: { value:'designer' }
});

//primitive vs Object
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//objects
var obj1 = {
  name: 'jonas',
  age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
  name: 'akshay',
  city: 'chennai'
};

function change(a,b){
  a = 38;
  b.city = 'kalyan';
}

change(age,obj);

console.log(age);
console.log(obj.city);
