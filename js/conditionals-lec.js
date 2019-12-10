"use strict";

console.log("hello from conditionals lec.js!");


// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin

// if(isAdmin){
//     //show admin navbar
//     // showAdminNavbar() <-- function
// }

//TODO Together: Send a 20% off coupon if its users birthday

// if(isBirthday) {
//     //send 20% off coupon
//     //sendBirthdayEmail() <-- function
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

// var isRainy = true;

// ------example one:
// if(isRainy === true){
//     alert("It's raining!");
// }

// //------example two:
// if(isRainy){
//     alert("It's raining!");
// }

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

// var itemCost = 100;
// var currentBalance = 200;
//
// if(itemCost <= currentBalance){
//     alert("You have enough money");
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

// var numberOfLives = 0;
//
// if (numberOfLives === 0){
//     alert("Sorry, game over");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

// var weather = "snowing"
//
// if(weather === "snowing"){
//     alert("It's snowing!");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

// var numberInput = 20;
//
// if (numberInput > 10){
//     alert("number greater than 10");
// }

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.


// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }


// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

// var isAdmin = true;
//
// if(isAdmin){
//     //show admin navbar
//     alert("user is an admin");
// } else {
//     //show regular navbar
//     alert("user is not an admin");
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else alert "have a nice day!"

// var isRainy = true;
//
// if(isRainy){
//     alert("it's raining");
// } else {
//     alert("have a nice day!");
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var numberOfLives = 0;
//
// if (numberOfLives === 0){
//     alert("Sorry, game over");
// } else {
//     alert("Next level!");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var isSnowy = false;
//
// if(isSnowy){
//     alert("it's snowing");
// } else {
//     alert("check back later for more details");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var numberInput = 1;
//
// if (numberInput > 10){
//     alert("true")
// } else {
//     alert("the number is less than 10")
// }


//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

// var checkIfGameIsOver = function (numberOfLives) {
// };
//
// if (numberOfLives === 0){
//     alert("Sorry, game over")
// } else {
//     alert("next level")
// }


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.


// TODO: SHOULD WE DELETE STUFF FROM CODEUP WEBSITE

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// console.log("the value of the confirm is " + weShouldDeleteStuff);
//
// if (weShouldDeleteStuff) {
//     alert("Deletion completed")
// } else {
//     alert("Operation Canceled!");
// }


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }


// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

// var weather = "snowing"

// if(weather === "snowing"){
//     alert("it's snowing");
// } else if (weather === "raining"){
//     alert("it's raining");
// } else if (weather === "sunny"){
//     alert("it's sunny");
// } else {
//     alert("have a nice day!");
// }


//TODO Together: refactor the above statement as a function

// function checkWeather (weather){
//     if(weather === "snowing"){
//         return ("it's snowing");
//     } else if (weather === "raining"){
//         return ("it's raining");
//     } else if (weather === "sunny"){
//         return ("it's sunny");
//     } else {
//         return ("have a nice day!");
//     }
// }
//
// console.log(checkWeather(weather= "sunny"));
// console.log(checkWeather(weather= "snowing"));
// console.log(checkWeather(weather= "windy"));

// TODO Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
//
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
//
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
//
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }


//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

// function checkTrafficLight(trafficLight) {
//
//     if (trafficLight === "red") {
//         return "STOP!";
//
//     } else if (trafficLight === "yellow") {
//         return "Slow down and prepare to stop";
//
//     } else if (trafficLight === "green") {
//         return "don't stop";
//
//     } else {
//         return "keep it rolling";
//     }
// }
//
// console.log(checkTrafficLight("red"));
// console.log(checkTrafficLight("yellow"));
// console.log(checkTrafficLight("green"));
// console.log(checkTrafficLight("blinking"));


// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.

// var userAge = 15;
// var hasPermit = true;
//
// if(userAge < 15){
//     alert("Sorry, you're not eligible for a permit");
// } else {
//     if(userAge === 15){
//     alert("You can have a permit");
// } else if (userAge >= 16 && hasPermit) {
//     alert("you can have a DL");
// } else if (userAge >= 16 && !hasPermit) {
//     alert("sorry, you need to go to driver's ed");
// } else {
//     alert("please see front desk");
// }
// }


// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = false;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
//
// console.log(message);


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;
//
// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }
//
// console.log(weatherMessage);

//WRITE YOUR TERNARY STATEMENT HERE!

// var weather = "sunny";
// var weatherMessage = (weather === "rainy") ? "it's raining" : "have a nice day";
// console.log(weatherMessage);

// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch (pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     case "ham":
//         alert("Ham is easy to spell and awesome!");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }

//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

// var weatherCondition = prompt("What city are you in?");
//
// switch(weatherCondition) {
//     case "San Antonio":
//         alert("It is raining");
//         break;
//     case "Austin":
//         alert("It is sunny");
//         break;
//     case "Houston":
//         alert("It is snowing");
//         break;
//     default:
//         alert("Come back later for more details!");
//         break;
// }


// var weather = "windy";
//
// switch (weather) {
//     case "rainy":
//         alert("It is raining");
//         break;
//     case "sunny":
//         alert("it is sunny");
//         break;
//     case "snow":
//         alert("it is snowing");
//         break;
//     default:
//         alert("have a nice day");
//         break;
// }
//
// console.log(weather);

// function checkWeather(weather) {
//     var weatherMessage;
//
//     switch (weather) {
//         case"rainy":
//             weatherMessage = "its raining";
//             break;
//         case"sunny":
//             weatherMessage = "its sunny";
//             break;
//         case"snowy":
//             weatherMessage = "its snowing";
//             break;
//         default:
//             weatherMessage = "have a nice day";
//             break;
//     }
//     return weatherMessage;
// }

// console.log(checkWeather("sunny"));
// console.log(checkWeather("rainy"));
// console.log(checkWeather("snowy"));
// console.log(checkWeather("windy"));


//TODO: Rewrite the intersection function from earlier as a switch statement.

// var checkTrafficLight = prompt("What color is the traffic light?");
//
// switch(checkTrafficLight) {
//     case "red":
//         alert("Stop!");
//         break;
//     case "yellow":
//         alert("Slow Down");
//         break;
//     case "green":
//         alert("Go");
//         break;
//     default:
//         alert("Proceed with caution");
//         break;
// }

// function checkTraffic(traffic) {
//     var trafficMessage;
//
//     switch (traffic) {
//         case "red":
//             trafficMessage = "Stop";
//             break;
//         case "yellow":
//             trafficMessage = "Slow Down";
//             break;
//         case "green":
//             trafficMessage = "Go";
//             break;
//         default:
//             trafficMessage = "Proceed with caution";
//             break;
//     }
//
//     return trafficMessage;
// }

// console.log(checkTraffic("red"));
// console.log(checkTraffic("yellow"));
// console.log(checkTraffic("green"));
// console.log(checkTraffic("blue"));


// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html

// if else used when the checkbox is clicked along with the amount changing from $5 to $10. the checkbox cannot be unchecked once clicked.


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html

// if else used when picking the weather

// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

// ternary statements were used in the dropdown selection