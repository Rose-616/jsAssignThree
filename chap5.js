// Practice exercise 5.1

// let maxValue = 9;
// let GuessedValue = Math.floor(Math.random() * 10) + 1;
// console.log("Random number: " + GuessedValue);

// let ans = false;
// let i = 0; 

// while (i < 5) {
//     let userGuess = +prompt("Enter a number between 1 and 9:");

//     if (userGuess === GuessedValue) {
//         ans = true;
//         console.log("Congratulations! You guessed the correct number.");
//         break; 
//     } else {
//         console.log("Try again! Your guess was incorrect.");
//     }

//     i++; 
// }


// Practice exercise 5.2
// let counter=0;
// let step=10;
// do {
//     console.log(counter)
//     counter += step;
//   }
//   while (counter < 100);

// Practice exercise 5.3
// let myWork = [];
// for (i=1;i<=10;i++){
// let lessonName = 'lesson ' + i;
// let status;
// if (i % 2 == 0){
//     status=true;
// }
// else{
//     status =false;
// }
// let myObject = {
//     name:lessonName,
//     status:status
// };
// myWork.push(myObject);
// }

// console.log(myWork);

// Practice exercise 5.4
// let myTable = [];
// let row;
// let column;
// let counter =0;
// for (i=1;i<11;i++){
//     let tempArray =[];
    
//     for(j=1;j<11;j++){
//        tempArray.push(counter);
//        counter++;

//     }
//     myTable.push(tempArray);
// }

// console.log(myTable);

// Practice exercise 5.5

// let gridArray = [];
// let numOfCell = 64;
// let counter = 0;
// let rowArray;

// for (let i = 0; i <= numOfCell; i++) {
//     if (counter % 8 === 0) {
//         if (rowArray !== undefined) {
//             gridArray.push(rowArray);
//         }
//         rowArray = [];
//     }
//     rowArray.push(counter);
//     counter++;
// }


// if (rowArray !== undefined ) {
//     gridArray.push(rowArray);
// }

// console.log(gridArray);

// Practice exercise 5.6

// let myArray = [];
// for (i=0;i<=10;i++){
//   myArray.push(i)
    
// }
// console.log(myArray);
// for(j=0;j<myArray.length;j++){
//     console.log(myArray[j]);
// }
// for (let x of myArray) {
//     console.log(x)
//   }

// Practice exercise 5.7
// let myObject = {
//     name:"rose",
//     id:25,
//     class:"six"
// };
// for(let x in myObject){
//     console.log(`Property: ${x}, Value: ${myObject[x]}`)
// }

// Practice exercise 5.8
// let ans ="";
// let skip =2;
// for(i=0;i<=10;i++){
//     if (skip == i){
//         continue;   
//     }
//  ans+=i+" ";
    
// }
// console.log(ans)
// Chapter project
// let myArray =[];
// let value = 12;
// for(i=2;i<=value;i++){
// let tempArray=[];
// for(j=1;j<=value;j++){
//     tempArray.push(i*j);

// }
// console.log(tempArray)
// }


