//Bind, call and apply

var john = {
  name: 'john',
  age: 26,
  job: 'teacher',
  presentation: function(style,timeOfDay) {
    if(style === 'formal')
    {
      console.log('good ' + timeOfDay + ', Ladies and gentelment! I\'m ' +this.name + ', I\'m a ' + this.job + ' and I\'m '+ this.age + ' years old.');

    }else if (style === 'friendly') {
      console.log('hey! what\'s up? I\'m ' +this.name + ', I\'m ' + this.job + ' and I\'m ' + this.age + ' years old.have anice ' + timeOfDay + '.' );
    }
  }
}
var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

john.presentation('formal','morning');

john.presentation.call(emily,'friendly','afternoon');

var johnFriendly =john.presentation.bind(john,'friendly');

johnFriendly('morning');
