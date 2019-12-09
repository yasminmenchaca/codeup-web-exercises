"use strict";

console.log("hello from while.js");


//TODO:Create a while loop that uses console.log() to create the output shown below:
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// var i=2;
//
// while (i<=65536) //Output the values from 0 to 65536
// {
//     console.log(i);
//     i*=2;
//     // x = x * 2
// }

//TODO: An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.

// 1. generate total amount of cones >> allCones
// 2. customer says how many cones they want >> conesPurchased
// 3. check how many available cones
// 4. if not (sad path) >> sorryMessage
// 5. if we have enough (happy path) >> happyConesMessage
//      - subtract amount of cones sold from allCones
// 6. repeat until no cones available >> allCones > 0



// This is how we get total number of cones to sell
var allCones = Math.floor(Math.random() * 50) + 50;


do{
    //this is how many cones purchased by customer
    var conesPurchased = Math.floor(Math.random() * 5) + 1;
    // checks if we have enough cones to sell
    if (conesPurchased > allCones){
        // sad path - cannot sell cones bc we dont have enough

        var sadMessage = ("I cannot sell you " + conesPurchased + " because I only have " + allCones + "...");
        console.log(sadMessage);

    } else {
        //happy path- i can sell cones due to having enough
        allCones -= conesPurchased;

        var happyMessage = (conesPurchased + " cone(s) sold ..." + allCones + " cone(s) to go");
        console.log(happyMessage)
    }



} while (allCones > 0)

console.log("Yay! I sold all of the cones!");
