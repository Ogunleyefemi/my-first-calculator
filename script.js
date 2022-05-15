// business logic for my calculator

function add(number1,number2){
    return number1 + number2;
}
// usin prompt to collect user data
let number1 = parseInt(prompt("type any number"));
let number2 = parseInt(prompt("type anyother number"));

//invoking 
document.write(add(number1,number2));
alert(add(number1,number2));