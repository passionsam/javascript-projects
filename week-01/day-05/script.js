/*
============================================
JavaScript Software Engineering Mentorship

week : 1
day  : 5

Project : 
Professional Calculator

student :
Samuel owora Chukwu
============================================
*/


function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if(b === 0){
       return `Division by ${b} is not allowed`;
    }

    return a / b;
} 

function square(a){
    return a ** 2;
}

function isEven(a){
    return a % 2 === 0;
}


console.log(add(20,10));
console.log(subtract(20,10));
console.log(multiply(20,10));
console.log(divide(20,10));
console.log(square(10));
console.log(isEven(10));

console.log(divide(20,0));