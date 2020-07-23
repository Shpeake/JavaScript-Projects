'use strict';
window.onload = function () {

  const buttons = document.querySelectorAll("#buttons div"),
    entry = document.querySelector("#read-out");
  var a, b, group = 1, operator;

  // Sets event listener on all buttons
  for (const x of buttons) {
    x.addEventListener("click", begin);
  }

  function begin() {
    if (this.className === "entry" && group === 1) {
      entry.innerText += this.innerText;
      a = entry.innerText;
      console.log(a + "a");
    } 
    
    if (this.className === "entry" && group !== 1 && entry.innerText === a) {
      entry.innerText = "";
    }

    if (this.className === "entry" && group !== 1 && entry.innerText !== a) {
      entry.innerText += this.innerText;
      b = entry.innerText;
      console.log(b + "b");
    }

    if (this.className === "operator" && a !== "") {
      group++;
      operator = this.innerText === "x" 
        ? "*" 
        : this.innerText === "÷"
          ? "/"
          : "";
      this.style.backgroundColor = "red";
    }

    if (this.id === "equals" && a !== "" && b !== "") {
      entry.innerText = calculate(a, b, operator);
    }

    if (this.id === "clear") {
      entry.innerText = "";
      a = "";
      b = "";
      group = 1;
      operator = "";
      var reset = document.querySelectorAll(".operator");
      for (let i = 0; i < reset.length; i++) {
        const FUNCS = reset[i];
        FUNCS.style.backgroundColor = "orange";
      }
      // Could just do location.reload();
    }

    function calculate(a, b, operator) {
      a = parseInt(a);
      b = parseInt(b);
      var results = eval(a + operator + b);
      return results;
    }

  }
  
};