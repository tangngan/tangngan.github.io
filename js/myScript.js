
"use strict";

// Bài tập 2
let a = 0;
let result = '';
let operator='';


function onNumberClick(el){
    let num = el.dataset.value;
    let currentNumber = Number(a + num);
    if (!isNaN(currentNumber)) {
        a = currentNumber;
        console.log('number2 ' + a);
        console.log('number1 ' + result);
        printToScreen(currentNumber.toLocaleString("en"));
    }
};

function printToScreen(value){
    let screen = document.getElementsByClassName("calculator-value")[0];
    screen.innerHTML=value;
};

function onNegativeClick(){
    a = -a;
    printToScreen(a.toLocaleString("en"));
};

function onDecimalClick(){
    const aAsStr = a.toString();
    if (!aAsStr.includes(".")){
        a += ".";
    };
    printToScreen(a);
};

function onClearScreen(){
    result = '';
    a = 0;
    operator = '';
    printToScreen('0');
};

function onOperationClick(el){
    let op = el.dataset.value;
    console.log(op);
    if (op !=='equal') {
        result = a;
        a = 0;
        operator = op;
        return;
    }
    if (op ==='equal' && result === '') {
        result = a;
        a = result;
        operator = op;
        return;
    }
    switch (operator) {
        case "add":
            result = Number(result) + Number(a);
            break;
        case "substract":
            result = Number(result) - Number(a);
            break;
        case "multiply":
            result = Number(result) * Number(a);
            break;
        case "divide":
            result = Number(result) / Number(a);
            console.log(result);
            break;
        case "percent":
            result = Number(result) / 100;
            console.log(result);
            break;
    }
    printToScreen(result.toLocaleString("en"));
};



// Bài tập 1
function tinhCong () {
    let x = document.getElementById('hw1-input1').value;
    let y = document.getElementById('hw1-input2').value;
    let a = Number(x);
    let b = Number(y);
    tongCong = a + b;
    document.getElementById('cong-result').innerHTML = tongCong;
}

function tinhTru () {
    let x = document.getElementById('hw1-input1').value;
    let y = document.getElementById('hw1-input2').value;
    let a = Number(x);
    let b = Number(y);
    tongTru = x - y;
    document.getElementById('tru-result').innerHTML = tongTru;
}

function tinhNhan () {
    let x = document.getElementById('hw1-input1').value;
    let y = document.getElementById('hw1-input2').value;
    let a = Number(x);
    let b = Number(y);
    tongNhan = x * y;
    document.getElementById('nhan-result').innerHTML = tongNhan;
}

function tinhChiaNguyen () {
    let x = document.getElementById('hw1-input1').value;
    let y = document.getElementById('hw1-input2').value;
    let a = Number(x);
    let b = Number(y);
    tongChiaNguyen = x / y;
    document.getElementById('chia-nguyen-result').innerHTML = tongChiaNguyen;
}

function tinhChiaLayDu () {
    let x = document.getElementById('hw1-input1').value;
    let y = document.getElementById('hw1-input2').value;
    let a = Number(x);
    let b = Number(y);
    tongChiaLayDu = x % y;
    document.getElementById('chia-du-result').innerHTML = tongChiaLayDu;
}

function tinhMu () {
    let x = document.getElementById('hw1-input1').value;
    let y = document.getElementById('hw1-input2').value;
    let a = Number(x);
    let b = Number(y);
    tongMu = x ** y;
    document.getElementById('mu-result').innerHTML = tongMu;
}


