function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + 'can you please explane what UX design is?');
    }
  }
  else if (job === 'teacher') {
    return function(name) {
      console.log('what subject do you teach, ' +  name + '?');
    }

  }
  else {
    return function(name) {
      console.log('hello ' + name + ',what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('john');
