// Practice exercise 6.1
// function add(x,y){
//     let result = x+y;
//     return result

// }
// let num1=7;
// let num2 =3;
// add(num1,num2);
// console.log(add(num1,num2))
// console.log(add(3,5))

// Practice exercise 6.2

// let myArray = ["brilliant", "exuberant", "resourceful","vibrant"];

// function askName() {
//     let name = prompt("Enter your name");
//     return name;
// }

// let randomIndex = Math.floor(Math.random() * myArray.length);
// let randomFruit = myArray[randomIndex];

// console.log(askName() + " " + randomFruit);


// Practice exercise 6.3

// let num1 = 4;
// let num2 = 5;
// let opr1 = "+";
// let opr2 = "-";

// function checkOpr(x, y, opr) {
//     let ans;
//     if (opr === "+") {
//         ans = x + y;
//     } else {
//         ans = x - y;
//     }
//     return ans;
// }

// console.log(checkOpr(num1, num2, opr1));
// console.log(checkOpr(num1, num2, opr2));


// Practice exercise 6.4
// let emptyArray = [];

// function add(x,y){
//     x+y;
//     return x+y ;
// }
// for (i=0;i<10;i++){
//     let value1 =i*5;
//     let value2 =i*i;
//     let result = add(value1,value2)
//     emptyArray.push(result)

// }

// console.log(emptyArray)

// Practice exercise 6.5
// let value = "1000";

// (function() {
//     let value = "Local value";
//     console.log("Local value inside the IIFE:", value);
// })();

// let result = (function() {
//     let value = "New value";
//     return value;
// })();
// console.log("The result variable contains:", result);

// let updateValue = function(newValue) {
//     value = newValue;
//     console.log(`The value inside the anonymous function is now: ${value}`);
// };

// updateValue('New value from anonymous function');

// Practice exercise 6.6
// function checkzero(x){
//     if (x == 0){
//         return 1;
//     }
//     else{
//         return x* checkzero(x-1);
//     }
// }

// console.log(checkzero(3))

// Practice exercise 6.7
// function count(x) {
//     console.log(x);

//     if (x <= 1) {
//         return; 
//     } else {
//         count(x - 1); 
//     }
// }

// let start = 10;
// count(start);

// Practice exercise 6.8
// let myvar = function(x){
// console.log(x)
// }
// myvar("hey");
// function printName( y){
//     console.log(y)
// }
// printName("hello");

// Chapter projects
// let countUp = (start) => {
//     console.log(start);

//     if (start >= 10) {
//         return; 
//     } else {
//         setTimeout(() => countUp(start + 1), 1000); 
//     }
// };


// countUp(9); 

// let outputOne = () => {
//     console.log('One');
// };

// let outputTwo = () => {
//     console.log('Two');
// };

// const outputThree = () => {
//     console.log('Three');
//     outputOne();
//     outputTwo();
// };

// const outputFour = () => {
//     console.log('Four');
//     setTimeout(() => outputOne(), 0);
//     setTimeout(() => outputThree(), 1000);
// };


// outputThree(); 
// outputFour();
