'use strict';
window.onload = function () {

  const buttons = document.querySelectorAll(".entry"),
    entry = document.querySelector("#read-out"),
    operators = document.querySelectorAll(".operator"),
    clear = document.getElementById("clear"),
    divide = document.getElementById("divide"),
    multiply = document.getElementById("multiply"),
    minus = document.getElementById("minus"),
    plus = document.getElementById("plus"),
    equals = document.getElementById("equals");
  var operator;

  for (const x of buttons) {
    x.addEventListener("click", entryA);
  }

  for (const y of operators) {
    y.addEventListener("click", operation);
  }

  function entryA() {
    var a = this.innerText;
    entry.innerText += a;
    return entry;
  }

  function operation() {
    var a = entry;
    operator = this.innerText;
    console.log(a + operator);
  }
  
};

// Set MAX to 10 numbers.