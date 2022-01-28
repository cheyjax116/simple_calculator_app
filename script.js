let num1 = "";
let num2 = "";
let pressedOperation = "";
let numkeys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "Backspace",
  "ArrowRight",
  "ArrowLeft",
  ".",
];

initializeCalculator();

function initializeCalculator() {
  initializingNumberButtons();
  initializeMemory();
  initializeOperators();
  initializeDisplayBox();
}

function initializingNumberButtons() {
  const numbers = document.querySelectorAll(".numbers");
  numbers.forEach((num) => {
    num.addEventListener("click", (e) => {
      captureNumberButtonPress(e.target.value);
    });
  });
}

function initializeDisplayBox() {
  let displayBox = document.getElementById("display-box");

  displayBox.addEventListener("keyup", function test(event) {
    if (!numkeys.includes(event.key) && !pressedOperation) {
      setDisplayValue(num1);
    } else if (!numkeys.includes(event.key) && pressedOperation) {
      setDisplayValue(num2);
    }

    if (numkeys.includes(event.key)) {
      if (!pressedOperation) {
        if (num1.length < 13) {
          num1 = getDisplayValue();
        } else if (num1.length == 13) {
          setDisplayValue(num1);
          console.log("num too long");
          displayBox.contentEditable = "false";
        }
        checkDecimalDisplay();

        if (displayBox.innerText == "") {
          resetDecimal();
        }
      } else if (pressedOperation) {
        checkDecimalDisplay();

        if (displayBox.innerText == "") {
          resetDecimal();
        }
        num2 = getDisplayValue();
      }
      // console.log(num1, num2)
    }
  });
}

function initializeMemory() {
  let storedNum = 0;

  document.getElementById("MR").addEventListener("click", function () {
    storedNum = parseFloat(storedNum.toFixed(4));
    setDisplayValue(storedNum);
    if (pressedOperation == "") {
      num1 = storedNum;
    } else {
      num2 = storedNum;
    }
  });
  document.getElementById("MC").addEventListener("click", function () {
    storedNum = 0;
  });
  document.getElementById("MPlus").addEventListener("click", function () {
    storedNum += Number(getDisplayValue());
  });
}
function initializeOperators() {
  const operations = document.querySelectorAll(".operations");
  operations.forEach((operation) => {
    operation.addEventListener("click", function (e) {
      num1 = Number(num1);
      num2 = Number(num2);
      resetDecimal();

      if (num1 && num2) {
        calculate(num1, num2);
      }

      pressedOperation = e.target.value;
      num1 = Number(getDisplayValue());
      num2 = "";
      detectMouseClick();
    });
  });
}

const equalButton = document.getElementById("equals-circle");
equalButton.addEventListener("click", () => {
  if (num2 != "") {
    num1 = Number(num1);
    num2 = Number(num2);
    calculate(num1, num2);
    resetCalculator();
  }
});

const percentage = document.getElementById("percentage-circle");
percentage.addEventListener("click", function () {
  percent = parseFloat(getDisplayValue()) / 100;
  setDisplayValue(percent);
});

const plusMinus = document.getElementById("plus-minus-circle");
plusMinus.addEventListener("click", function () {
  const currentDisplayValue = getDisplayValue();
  setDisplayValue(`-${currentDisplayValue}`);
});

document.getElementById("clear-circle").addEventListener("click", function () {
  setDisplayValue("");
  resetCalculator();
  resetDecimal();
  resetDisplaySize();
});

function calculateAddition() {
  const current = parseFloat(getDisplayValue());
  num2 = current;
  let equal = Number(parseFloat(Number(num1) + Number(num2)).toFixed(4));
  setDisplayValue(equal);
  pressedOperation = "";
}

function calculateSubtraction() {
  const current = parseFloat(getDisplayValue());
  num2 = current;
  let equal = Number(parseFloat(num1 - num2).toFixed(4));
  setDisplayValue(equal);
  pressedOperation = "";
}

function calculateMultiplication() {
  const current = parseFloat(getDisplayValue());
  num2 = current;
  let equal = Number(parseFloat(num1 * num2).toFixed(4));
  setDisplayValue(equal);
  pressedOperation = "";
}

function calculateDivision() {
  const current = parseFloat(getDisplayValue());
  num2 = current;
  const equal = Number(parseFloat(num1 / num2).toFixed(4));
  setDisplayValue(equal);
  pressedOperation = "";
}

function calculate(firstOperand, secondOperand) {
  let equal;
  if (pressedOperation == "+") {
    equal = Number(parseFloat(firstOperand + secondOperand).toFixed(4));
  } else if (pressedOperation == "-") {
    equal = Number(parseFloat(firstOperand - secondOperand).toFixed(4));
  } else if (pressedOperation == "*") {
    equal = Number(parseFloat(firstOperand * secondOperand).toFixed(4));
  } else if (pressedOperation == "/") {
    equal = Number(parseFloat(firstOperand / secondOperand).toFixed(4));
  }
  if (equal.toString().length > 14 && equal.toString().length < 21) {
    reduceDisplaySize();
    setDisplayValue(equal);
  } else if (equal.toString().length >= 21) {
    setDisplayValue(Number(equal.toPrecision(1 + 4)));
  } else {
    setDisplayValue(equal);
  }
  pressedOperation = "";
}

function resetDecimal() {
  document.getElementById("decimal-point").style.pointerEvents = "auto";
  numkeys.push(".");
}

function disarmDecimal() {
  document.getElementById("decimal-point").style.pointerEvents = "none";
  numkeys.pop(".");
}

function resetCalculator() {
  num1 = "";
  num2 = "";
  pressedOperation = "";
}
//helpers
function captureNumberButtonPress(number) {
  if (!pressedOperation) {
    num1 += number;
    if (getDisplayValue().length < 14) {
      setDisplayValue(num1);
    } else if (getDisplayValue().length == 14) {
      num1 = getDisplayValue();
      setDisplayValue(num1);
    }
  } else if (pressedOperation) {
    num2 += number;
    if (num2.length <= 14) {
      setDisplayValue(num2);
    } else if (num2.length == 14) {
      num2 = getDisplayValue();
      setDisplayValue(num2);
    }
  }
}

function captureKeyPressNumbers(number) {
  document.addEventListener("keydown", function (event) {
    console.log(event);
    console.log(event);
    console.log(event.key);
  });
}

function getDisplayValue() {
  return document.getElementById("display-box").innerText;
}

function setDisplayValue(newValue) {
  document.getElementById("display-box").innerText = newValue;
}

function reduceDisplaySize() {
  document.getElementById("display-box").style.fontSize = "1.4em";
}

function resetDisplaySize() {
  document.getElementById("display-box").style.fontSize = "2em";
}

function clearDisplayAfterOperation() {
  return (document.getElementById("display-box").innerText = "");
}

function detectMouseClick() {
  let displayBox = document.getElementById("display-box");
  displayBox.addEventListener("mouseenter", function () {
    displayBox.contentEditable = "true";
  });
}

function checkDecimalDisplay() {
  let displayBox = document.getElementById("display-box");
  if (displayBox.innerText.includes(".")) {
    disarmDecimal();
  }
}
