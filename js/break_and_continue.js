"use strict";
// console.log("hello from break_and_continue.js");

//TODO: 1. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input. 2. Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

var userNumber = parseInt(prompt("Enter an odd number between 1 and 50"));

console.log("Your number is: " + userNumber);

for (var i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        continue;
    }

    if (userNumber === i) {
        console.log("Yikes! Skipping number: " + i);
    } else {
        console.log("Here is an odd number " + i);
    }

    if (i >= 49) {
        break;
    }

}