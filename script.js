let displayBox = document.getElementById("display-box");
let num1 = "";
let num2 = "";
let pressedOperation = "";

const numbers = document.querySelectorAll(".numbers");

function checkNumbers() {
  numbers.forEach((num) => {
    num.addEventListener("click", function () {
      switch (num.id) {
        case "number-0":
          num = 0;
          break;
        case "number-1":
          num = 1;
          break;
        case "number-2":
          num = 2;
          break;
        case "number-3":
          num = 3;
          break;
        case "number-4":
          num = 4;
          break;
        case "number-5":
          num = 5;
          break;
        case "number-6":
          num = 6;
          break;
        case "number-7":
          num = 7;
          break;
        case "number-8":
          num = 8;
          break;
        case "number-9":
          num = 9;
          break;
        case "decimal-point":
          num = ".";
          break;
      }
      pressedNumber(num);
    });
  });
}

checkNumbers();

const pressedNumber = (number) => {
  const displayNumber = displayBox.innerHTML;
  if (displayNumber.length < 14) {
    if (!pressedOperation) {
      num1 += number;
      displayBox.innerHTML = num1;
    } else {
      num2 += number;
      displayBox.innerHTML = num2;
    }
  }
};

function calculateAddition() {
  let current = displayBox.innerHTML;
  current = parseFloat(displayBox.innerHTML);
  num2 = current;
  let equal = parseFloat(Number(num1) + Number(num2)).toFixed(4);
  displayBox.innerHTML = Number(equal);
  pressedOperation = "";
}

function calculateSubtraction() {
  let current = displayBox.innerHTML;
  current = parseFloat(displayBox.innerHTML);
  num2 = current;
  let equal = parseFloat(num1 - num2).toFixed(4);
  displayBox.innerHTML = Number(equal);
  pressedOperation = "";
}

function calculateMultiplication() {
  let current = displayBox.innerHTML;
  current = parseFloat(displayBox.innerHTML);
  num2 = current;
  let equal = parseFloat(num1 * num2).toFixed(4);
  displayBox.innerHTML = Number(equal);
  pressedOperation = "";
}

function calculateDivision() {
  let current = displayBox.innerHTML;
  current = parseFloat(displayBox.innerHTML);
  num2 = current;
  let equal = parseFloat(num1 / num2).toFixed(4);
  displayBox.innerHTML = Number(equal);
  pressedOperation = "";
}

const operations = document.querySelectorAll(".operations");

operations.forEach((operation) => {
  operation.addEventListener("click", function (e) {
    num1 = Number(num1);
    num2 = Number(num2);

    if (num1 && num2) {
      calculate();
    }

    resetDecimal();
    pressedOperation = e.target.id;
    num1 = Number(displayBox.innerHTML);
    num2 = "";
  });
});

const equal = document.getElementById("equals-circle");
equal.addEventListener("click", calculate);

const percentage = document.getElementById("percentage-circle");
percentage.addEventListener("click", function () {
  percent = parseFloat(displayBox.innerHTML) / 100;
  displayBox.innerHTML = percent;
});

const plusMinus = document.getElementById("plus-minus-circle");
plusMinus.addEventListener("click", function () {
  displayBox.innerHTML = "-" + displayBox.innerHTML;
});

function calculate() {
  if (pressedOperation == "addition-circle") {
    calculateAddition();
  } else if (pressedOperation == "subtraction-circle") {
    calculateSubtraction();
  } else if (pressedOperation == "multiply-circle") {
    calculateMultiplication();
  } else if (pressedOperation == "division-circle") {
    calculateDivision();
  }
}

function resetDecimal() {
  document.getElementById("decimal-point").style.pointerEvents = "auto";
}

function disarmDecimal() {
  document.getElementById("decimal-point").style.pointerEvents = "none";
}

function resetDisplayBox() {
  document.getElementById("display-box");
}

document.getElementById("clear-circle").addEventListener("click", function () {
  displayBox.innerHTML = "";
  num1 = "";
  num2 = "";
  pressedOperation = "";
  resetDecimal();
});
