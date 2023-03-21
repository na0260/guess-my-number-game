"use strict";

let main_value = Math.floor(Math.random() * 10);
let press_1 = document
  .querySelector(".press-1")
  .addEventListener("click", function () {
    let guess_value = Number(document.querySelector(".press-1").innerHTML);
    document.querySelector(".guess-value").value = guess_value;
    if (main_value == guess_value) {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Correct Guess";
      document.querySelector(".message").classList.remove("text-primary");
      document.querySelector(".message").classList.add("text-success");
    } else {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Wrong guess, Try again";
      document.querySelector(".message").classList.remove("text-primary");
      document.querySelector(".message").classList.add("text-danger");
    }
  });
let press_2 = document
  .querySelector(".press-2")
  .addEventListener("click", function () {
    let guess_value = Number(document.querySelector(".press-2").innerHTML);
    document.querySelector(".guess-value").value = guess_value;
    if (main_value == guess_value) {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Correct Guess";
        document.querySelector(".message").classList.add("text-success");
        document.querySelector(".message").classList.remove("text-primary");
    } else {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Wrong guess, Try again";
        document.querySelector(".message").classList.add("text-danger");
        document.querySelector(".message").classList.remove("text-primary");
    }
  });
let press_3 = document
  .querySelector(".press-3")
  .addEventListener("click", function () {
    let guess_value = Number(document.querySelector(".press-3").innerHTML);
    document.querySelector(".guess-value").value = guess_value;
    if (main_value == guess_value) {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Correct Guess";
        document.querySelector(".message").classList.add("text-success");
        document.querySelector(".message").classList.remove("text-primary");
    } else {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Wrong guess, Try again";
        document.querySelector(".message").classList.add("text-danger");
        document.querySelector(".message").classList.remove("text-primary");
    }
  });
let press_4 = document
  .querySelector(".press-4")
  .addEventListener("click", function () {
    let guess_value = Number(document.querySelector(".press-4").innerHTML);
    document.querySelector(".guess-value").value = guess_value;
    if (main_value == guess_value) {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Correct Guess";
        document.querySelector(".message").classList.add("text-success");
        document.querySelector(".message").classList.remove("text-primary");
    } else {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Wrong guess, Try again";
        document.querySelector(".message").classList.add("text-danger");
        document.querySelector(".message").classList.remove("text-primary");
    }
  });
let press_5 = document
  .querySelector(".press-5")
  .addEventListener("click", function () {
    let guess_value = Number(document.querySelector(".press-5").innerHTML);
    document.querySelector(".guess-value").value = guess_value;
    if (main_value == guess_value) {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Correct Guess";
        document.querySelector(".message").classList.add("text-success");
        document.querySelector(".message").classList.remove("text-primary");
    } else {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Wrong guess, Try again";
        document.querySelector(".message").classList.add("text-danger");
        document.querySelector(".message").classList.remove("text-primary");
    }
  });
let press_6 = document
  .querySelector(".press-6")
  .addEventListener("click", function () {
    let guess_value = Number(document.querySelector(".press-6").innerHTML);
    document.querySelector(".guess-value").value = guess_value;
    if (main_value == guess_value) {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Correct Guess";
        document.querySelector(".message").classList.add("text-success");
        document.querySelector(".message").classList.remove("text-primary");
    } else {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Wrong guess, Try again";
        document.querySelector(".message").classList.add("text-danger");
        document.querySelector(".message").classList.remove("text-primary");
    }
  });
let press_7 = document
  .querySelector(".press-7")
  .addEventListener("click", function () {
    let guess_value = Number(document.querySelector(".press-7").innerHTML);
    document.querySelector(".guess-value").value = guess_value;
    if (main_value == guess_value) {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Correct Guess";
      document.querySelector(".message").classList.remove("text-primary");
      document.querySelector(".message").classList.add("text-success");
    } else {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Wrong guess, Try again";
        document.querySelector(".message").classList.add("text-danger");
        document.querySelector(".message").classList.remove("text-primary");
    }
  });
let press_8 = document
  .querySelector(".press-8")
  .addEventListener("click", function () {
    let guess_value = Number(document.querySelector(".press-8").innerHTML);
    document.querySelector(".guess-value").value = guess_value;
    if (main_value == guess_value) {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Correct Guess";
        document.querySelector(".message").classList.add("text-success");
        document.querySelector(".message").classList.remove("text-primary");
    } else {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Wrong guess, Try again";
        document.querySelector(".message").classList.add("text-danger");
        document.querySelector(".message").classList.remove("text-primary");
    }
  });
let press_9 = document
  .querySelector(".press-9")
  .addEventListener("click", function () {
    let guess_value = Number(document.querySelector(".press-9").innerHTML);
    document.querySelector(".guess-value").value = guess_value;
    if (main_value == guess_value) {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Correct Guess";
        document.querySelector(".message").classList.add("text-success");
        document.querySelector(".message").classList.remove("text-primary");
    } else {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Wrong guess, Try again";
        document.querySelector(".message").classList.add("text-danger");
        document.querySelector(".message").classList.remove("text-primary");
    }
  });
let press_0 = document
  .querySelector(".press-0")
  .addEventListener("click", function () {
    let guess_value = Number(document.querySelector(".press-0").innerHTML);
    document.querySelector(".guess-value").value = guess_value;
    if (main_value == guess_value) {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Correct Guess";
        document.querySelector(".message").classList.add("text-success");
        document.querySelector(".message").classList.remove("text-primary");
    } else {
      document.querySelector(".main-value").value = main_value;
      document.querySelector(".message").innerHTML =
        "Wrong guess, Try again";
        document.querySelector(".message").classList.add("text-danger");
        document.querySelector(".message").classList.remove("text-primary");
    }
  });
