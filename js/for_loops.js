"use strict";

console.log("hello from for_loops.js");

//TODO: Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// function showMultiplicationTable(number) {
//
//     for (var i = 1; i <= 10; i++) {
//         var answer = number * i;
//         console.log(number + " * " + i + " = " + answer);
//     }
// }
//
// showMultiplicationTable(1);
// showMultiplicationTable(2.5);
// showMultiplicationTable(3.9);
// showMultiplicationTable(4);


//TODO: Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd


// for (var i=0; i <= 10; i++){
//     var randomNumber = Math.floor(Math.random() * 180) + 20;
//
//     if (randomNumber % 2 === 0){
//         console.log(randomNumber + " is even");
//     } else {
//         console.log(randomNumber + " is odd")
//     }
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

// for (var i=1; i<10; i++){
//     // convert numbers into strings then repeat
//     console.log(i.toString().repeat(i));
// }



// another method

// for (var outer = 1; outer <= 9; outer++){
//     var output = "";
//     for (var inner = 1; inner <= outer; inner++){
//         output += outer;
//     }
//     console.log(output);
// }

//TODO: Create a for loop that uses console.log to create the output shown below.
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

// for (var i = 100; i >= 5; i-=5){
//     console.log(i);
// }