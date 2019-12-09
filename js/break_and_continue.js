"use strict";
console.log("hello from break_and_continue.js");

//TODO: 1. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input. 2. Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

var random = Math.floor((Math.random() * 50) + 1);

console.log("Random odd number to skip is: " + random);

for (var i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        continue;
    }

    if (random === i) {
        console.log("Yikes! Skipping number: " + i);
    } else {
        console.log("Here is an odd number " + i);
    }

    if (i >= 49) {
        break;
    }

}

