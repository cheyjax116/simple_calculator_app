
let displayBox = document.getElementById("display-box");
// displayBox.innerHTML = '0';

const numbers =  document.querySelectorAll('.numbers')


function checkNumbers() {
numbers.forEach(num => {
    num.addEventListener("click", function() {
        
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
            num = '.';
            break;
    }
     pressedNumber(num)
})
})
}

checkNumbers()


const pressedNumber = number => {
    const displayedNumber = displayBox.innerHTML;
    
    if (displayedNumber.length < 13){

            // console.log(displayedNumber + number.toString())

            stringNumber = displayedNumber + number.toString();
        
            displayBox.innerHTML = stringNumber;
        }
        
    }




// function numberPress(num){
//     let current = displayBox.innerHTML;
//     current = current + num;
//     displayBox.innerHTML = current;

// }


function operationPress(){

    let current = displayBox.innerHTML;
        current = parseFloat(displayBox.innerHTML);
        if (num1 == null){
            num1 = current;
            displayBox.innerHTML = '';
        } else {
            num2 == current;

            }
}


function calculateAddition(){
    let current = displayBox.innerHTML;
    current = parseFloat(displayBox.innerHTML);
    num2 = current; 
    let equal = parseFloat(num1+ num2).toFixed(4);
    displayBox.innerHTML = Number(equal);
 
 }

 function calculateSubtraction(){
    let current = displayBox.innerHTML;
    current = parseFloat(displayBox.innerHTML);
    num2 = current; 
    let equal = parseFloat(num1 - num2).toFixed(4);
    displayBox.innerHTML = Number(equal);
 
 }

 function calculateMultiplication(){
    let current = displayBox.innerHTML;
    current = parseFloat(displayBox.innerHTML);
    num2 = current; 
    let equal = parseFloat(num1 * num2).toFixed(4);
    displayBox.innerHTML = Number(equal);
 
 }

 function calculateDivision(){
    let current = displayBox.innerHTML;
    current = parseFloat(displayBox.innerHTML);
    num2 = current; 
    let equal = parseFloat(num1 / num2).toFixed(4);
    displayBox.innerHTML = Number(equal);
 
 }

const operations = document.querySelectorAll('.operations')
let num1;
let num2;
let pressedOperation;


operations.forEach(operation => {
    operation.addEventListener('click', function(){

        switch (operation.id) {

        case "addition-circle":
            operationPress()
            pressedOperation = "addition"
            resetDecimal()
            break

        case "subtraction-circle":
            operationPress()
            pressedOperation = "subtraction";
            resetDecimal()
            break

        case "multiply-circle":
            operationPress()
            pressedOperation = "multiply";
            resetDecimal()
            break

        case "division-circle":
            operationPress()
            pressedOperation = "division";
            resetDecimal()
            break

        case "equals-circle":
            if (pressedOperation == "addition"){
                calculateAddition();
            } else if (pressedOperation == "subtraction") {
                calculateSubtraction();
            } else if (pressedOperation == "multiply") {
                calculateMultiplication();
                
            } else if (pressedOperation == "division") {
                calculateDivision();
            }
            break

        case "percentage-circle":
            percent = parseFloat(displayBox.innerHTML) / 100;
            displayBox.innerHTML = percent;
            break

        case "plus-minus-circle":
            displayBox.innerHTML = "-" + displayBox.innerHTML
            break
            
        }

    })
})


function resetDecimal(){
    document.getElementById("decimal-point").style.pointerEvents = 'auto';
}

function disarmDecimal(){
    document.getElementById("decimal-point").style.pointerEvents = 'none';
}

function resetDisplayBox(){
    document.getElementById("display-box");


}

document.getElementById("clear-circle").addEventListener("click", function() {
    displayBox.innerHTML = '';
    num1 = null; 
    num2 = null; 
    pressedOperation = null;
    resetDecimal()    

});

