
let num1 = 0;
let str = NaN;


 function add(num1, num2) {
    result = num1 + num2;
    if (result % 1 != 0){
        result = result.toFixed(2);
    }
    return result;
};

 function subtract(num1, num2) {
    result = num1 - num2;
    if (result % 1 != 0){
        result = result.toFixed(2);
    }
    return result;
};

 function multiply(num1, num2) {
    result = num1 * num2;
    if (result % 1 != 0){
        result = result.toFixed(2);
    }
    return result;
};

function divide(num1, num2) {
    result = num1 / num2;
    if (num2 === 0){
        result = "none";
    }
    else if (result % 1 != 0){
        result = result.toFixed(2);
    }
    return result;
};


function operate(operator, num1, num2) {
    if (operator === '+'){
       add(num1, num2);
    }
    else if (operator === '-'){
        subtract(num1, num2);
    }
    else if (operator === '*'){
        multiply(num1, num2);
    }
    else if (operator === '/'){
        divide(num1, num2);
    }
};


 function numberClicked(number) {
    display = document.getElementById('display-text');
    if (display.innerHTML.length <= 13){
        display.innerHTML += number;   
    }
}

function decimalClicked(decimal) {
    display = document.getElementById('display-text');
    if (display.innerHTML.length <= 13 && display.innerHTML % 1 == 0){
        display.innerHTML += decimal;   
    } 
}

function operatorClicked(operatorButton) {
    display = document.getElementById('display-text');
    num1 = Number(display.innerHTML);
    //console.log(num1);
    display.innerHTML = "";
    operator = operatorButton;
    //console.log(operator);

}

function equalsClicked(operator){
    display = document.getElementById('display-text');
    num2 = Number(display.innerHTML);
    //console.log(num1);
    //console.log(num2);
    operate(operator, num1, num2);
    //console.log(result);
    if (result == "none"){
        display.innerHTML = "000"; 
    }
    else{
        display.innerHTML = result;
    }
    

}

function clearClicked(){
    display = document.getElementById('display-text');
    display.innerHTML = "";
}


function backSpace(){
    display = document.getElementById('display-text');
    console.log(display.innerHTML);
    if (display.innerHTML.length == 1 || display.innerHTML.length == 0){
        display.innerHTML = "";
    }
    else{
        str = display.innerHTML.toString();
        str = str.slice(0,str.length -1);
        console.log(str);
        display.innerHTML = Number(str);
    }
    console.log(display.innerHTML);
}