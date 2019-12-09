"use strict";

console.log("conditionals.html");

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


// var askingNumber = confirm("Do you want to play a game?");
//
// if (askingNumber) {
//     var inputNumber = Number(prompt("Please enter a number"));
//     var isOddEven = (inputNumber & 1) ? "odd" : "even";
//     var plusOneHundred = inputNumber + 100;
//     var isPositiveNegative = (inputNumber > 0) ? "positive" : (inputNumber < 0) ? "negative": "zero";
//
//     alert("Your number is " + isOddEven);
//     alert("Your number plus one hundred is " + plusOneHundred);
//     alert("Your number is " + isPositiveNegative);
//
// } else {
//     alert("Have a nice day!")
// }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// function analyzeColor(inputColor) {
//
//     if (inputColor === "blue") {
//         return "blue is the color of the sky";
//
//     } else if (inputColor === "red") {
//         return "Strawberries are red";
//
//     } else if (inputColor === "cyan") {
//         return "I don't know anything about cyan";
//
//     } else {
//         return "I like that color";
//     }
// }
//
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */

// console.log(analyzeColor("randomColor"));

    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var analyzeColor = prompt("What is your favorite color?");

// switch (analyzeColor) {
//     case "red":
//         alert("Strawberries are red");
//         break;
//     case "blue":
//         alert("blue is the color of the sky");
//         break;
//     case "cyan":
//         alert("I don't know anything about cyan");
//         break;
//     default:
//         alert("Hmm, okay");
//         break;
// }

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumber, grandTotal){
//     switch (luckyNumber){
//         case 0:
//             return grandTotal;
//         case 1:
//             return grandTotal * .9;
//         case 2:
//             return grandTotal * .75;
//         case 3:
//             return grandTotal * .65;
//         case 4:
//             return grandTotal * .5;
//         case 5:
//             return 0;
//         default:
//             return "Sorry, please enter an number between 0 and 5";
//     }
// }
//
// console.log(calculateTotal(10, 100)); // default
// console.log(calculateTotal(0, 100)); // 100
// console.log(calculateTotal(1, 100)); //90
// console.log(calculateTotal(2, 100)); //75
// console.log(calculateTotal(3, 100)); //65
// console.log(calculateTotal(4, 100)); //50
// console.log(calculateTotal(5, 100)); //0

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// let totalBill = prompt("Enter your total amount");
// alert("Thee lucky number is " + luckyNumber);
// alert("Your original price was $"+ totalBill);
// alert("Your discounted amount is $" + (calculateTotal(luckyNumber, totalBill)));