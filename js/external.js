"use strict";

// alert('Welcome to my Website!');
//
// var favoriteColor = "";
//
// while (favoriteColor === "") {
//     favoriteColor = prompt("What is your favorite color?")
// }
//
// alert("Great, " + favoriteColor + " is my favorite color too!");


// // TODO------------------------movie------------------------

// var littleMermaid = prompt("How many days did you want to rent The Little Mermaid?");
// var brotherBear = prompt("How many days did you want to rent Brother Bear?");
// var hercules = prompt("How many days did you want to rent Hercules?");
// var littleMermaidTotal = parseFloat(littleMermaid) * 3;
// var brotherBearTotal = parseFloat(brotherBear) * 3;
// var herculesTotal = parseFloat(hercules) * 3;
//
// var rentalAmount = (littleMermaidTotal + brotherBearTotal + herculesTotal);
//
// alert("Your total amount will be $" + rentalAmount);

// // TODO------------------------paycheck------------------------

// var facebookRate = prompt("How many hours did you work at Facebook?");
// var googleRate = prompt("How many hours did you work at Google?");
// var amazonRate = prompt("How many hours did you work at Amazon?");
// var facebookTotal = parseFloat(facebookRate) * 350;
// var googleTotal = parseFloat(googleRate) * 400;
// var amazonTotal = parseFloat(amazonRate) * 380;
//
// var payCheck = (facebookTotal + googleTotal + amazonTotal);
//
// alert("Your paycheck will be $" + payCheck);

// TODO------------------------classes my way------------------------

// var semesterHours = prompt("How many hours are you currently taking?");
// var totalHours = parseFloat(semesterHours) <= 12;
//
// var classSize = 125;
// var totalSize = parseFloat(classSize) > 0;
//
// if (totalHours) {
//     alert("You meet the hours requirement");
//     prompt("How many students are in the class?");
//
// } else {
//     alert("You do not meet the hours requirement");
//
// }
//
// if (totalSize) {
//     alert("We have reserved your spot.");
//
// } else {
//     alert("Sorry, you cannot register for this class.");
// }

// TODO------------------------classes walkthrough way------------------------

// var classNotFull = confirm("Class is not full");
// var noScheduleConflicts = confirm("Schedule does not conflict");
//
// // console.log("class not full " + classNotFull);
// // console.log("no schedule conflicts: " + noScheduleConflicts);
//
// var studentEnrolls = classNotFull && noScheduleConflicts;
// // console.log(studentEnrolls);
//
// alert("Student can enroll: " + studentEnrolls);


// TODO------------------------grocery store------------------------

// var numberOfItems = Number(prompt("how many items for checkout?")); //number
// var offerValid = confirm("is the offer valid?"); //boolean
// var isPremiumMember = confirm("are you a premium member?"); //boolean
//
// var discountApplied = offerValid && (isPremiumMember || numberOfItems > 2);
//
// alert("Can use discount: " + discountApplied);

// TODO------------------------username and password-----------------------

