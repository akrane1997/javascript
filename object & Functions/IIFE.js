// Immediately invoked Function Expression(IIFE)

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

//IIFE
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function (goodluck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodluck);
})(5);
