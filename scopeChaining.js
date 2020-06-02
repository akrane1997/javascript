var a="hello!..";
first();
function first(){
  var b="hi!..";
  second();

  function second()
  {
    var c="hey!..";
    console.log(a+b+c);
    third();
  }
}

function third()
{
  var d="john..";
  //console.log(c);
  console.log(a+d);
}
