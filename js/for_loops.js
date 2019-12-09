"use strict";

console.log("hello from for_loops.js");

//TODO: Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

//    var showMultiplicationTable = function (number) {
//         for (var i = 1; i <= 10; i++) {
//             var multiply = number * i;
//             console.log(number + " * " + i + " = " + multiply);
//         }
//     };
// // showMultiplicationTable(1);
// // showMultiplicationTable(2.5);
// // showMultiplicationTable(3.9);
// // showMultiplicationTable(4);

//TODO: Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd

// for (var i = 0; i < 10; i++) {
//     var number = Math.floor(Math.random() * 200) + 20;
//     console.log(number + " is " + (number % 2 === 0 ? "even" : "odd"));
// }

//TODO: Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for (var i = 0; i < 10; i++) {
    var triangle = [];
    for (var a = 0; a < i; a++) {
        triangle.push(i);
    }
    console.log(triangle.join(''));
}

//TODO:Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for (let i = 100; i > 0; i -= 5) {
    console.log(i);
}

