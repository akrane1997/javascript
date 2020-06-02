console.log(this);


// calculateAge(1897);
// function calculateAge(year){
//   console.log(2016-year);
//   console.log(this);
// }

var john={
  name:'john',
  yearOfBirth:1998,
  calculateAge:function(){
    console.log(this);
    console.log(2016-this.yearOfBirth);
    //
    // function innerFunction()
    // {
    //   console.log(this);
    // }
    // innerFunction();
  }
}
john.calculateAge();

var mike={
  name:'mike',
  yearOfBirth:1976
};
mike.calculateAge=john.calculateAge;
mike.calculateAge();
