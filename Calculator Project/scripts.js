'use strict';
window.onload = function () {

  var buttons = document.querySelectorAll(".entry");
  var entry = document.querySelector("#read-out");

  for (const x of buttons) {
    x.addEventListener("click", enterNumbers);

  }

  function enterNumbers() {
    var number = parseInt(this.innerText);
    entry.innerText = number;
  }

};