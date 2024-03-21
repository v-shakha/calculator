
let disp1;
let disp2;
let operator;
const display = document.querySelector(".result");
const nums = Array.from(document.querySelectorAll(".nums"));
// nums = Array.from(nums);
// console.log(nums);
nums.map((num)=>
    num.addEventListener("click",function(){
        updateDisplay(num.value,"number");
    })
);
const ops = Array.from(document.querySelectorAll(".ops"))
ops.map((op)=>
    op.addEventListener("click",function(){
        updateDisplay(op.value,"operation");
    })
)
const equal = document.querySelector(".equal");
equal.addEventListener("click",()=> doOperations());
const clear = document.querySelector(".clear");
clear.addEventListener("click",()=>clearDisplay());
function add(num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1, num2){
    return num1*num2;
}
function divide(num1, num2){
    return num1/num2;
}
function operate(num1,num2,operator){
    switch(operator){
        case '+':
            result = add(num1,num2);
            break;
        case '-':
            result = subtract(num1,num2);
            break;
        case '*':
            result = multiply(num1,num2);
            break;
        case '/':
            result = divide(num1,num2);
            break;
    }
    updateDisplay(result,"result");
}
function updateDisplay(num,type){
    
    
    display.textContent = num;
    if(type == "number" || type == "result")
        num = parseInt(num);
    if(typeof num == 'number' && type == "number"){
        if(disp1 == undefined)
            disp1 = num;
        else
            disp2 = num;
    }
    else if (type=="result"){
        disp1 = num;
        disp2 = undefined;
        operator = undefined;
    }
    else{
        operator = num;
    }

}
function doOperations(){
    if(disp1!=undefined && disp2!=undefined && operator)
        operate(disp1,disp2,operator);
    else{
        // console.log(disp1,disp2,operator);
        display.textContent = "error";
        disp1 = undefined;
        disp2 = undefined;
        operator = undefined
    }
}
function clearDisplay(){
    disp1 = undefined;
    disp2 = undefined;
    operator = undefined;
    display.textContent = "0";
}