$(function() {
    var currentDigits = [];
    var equation = [];
  $('.numbers').click(function(){
    currentDigits.push(this.innerText);
    console.log(currentDigits);
  });

  $('.operators').click(function() {
    console.log(this.innerText);
    var thisNumber = parseInt(currentDigits.join(''));
    equation.push(thisNumber);
    currentDigits = [];
    equation.push(this.innerText);
  });

  $('#equals').click(function() {
    var thisNumber = parseInt(currentDigits.join(''));
    equation.push(thisNumber);
    currentDigits = [];
    var answer = equation[0];
    for (var i = 1; i < equation.length; i++) {
      if (equation[i] === "+"||"-"||"/"||"*") {
        if (equation[i] === "+") {
          answer = answer + equation[i+1];
        }
        if (equation[i] === "-") {
          answer = answer - equation[i+1];
        }
        if (equation[i] === "*") {
          answer = answer * equation[i+1];
        }
        if (equation[i] === "/") {
          answer = answer / equation[i+1];
        }
      }
    }
  alert(equation.join(' ') + ' = ' + answer);
  });


});
