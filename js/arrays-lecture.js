"use strict";
// console.log("arrays lecture");

//TODO: Declaring an Array

// var pets = [];
// pets[0] = "Toby";
// pets[1] = "Princess";
// pets[2] = "Samson";
// pets[3] = "Jill";
// pets[4] = "Bubbles";
// pets[5] = "Malu";
//
// // or
//
var pets = ["Toby", "Princess", "Samson", "Jill", "Bubbles", "Malu", "Lily"];
//
//
// console.log(pets);

//TODO: Iterating Arrays with For Loop

// for (var i = 0; i < pets.length; i++) {
//     console.log(pets[i]);
// }

// // or

// var i=0;
// while (i<pets.length){
//     console.log(pets[i]);
//     i++
// }

// pets[pets.length] = "Lily";
// console.log(pets[pets.length-1]);


// // for each iterator
pets.forEach(function (pet, i, arr) {
    console.log(pet);
    // // or
    // console.log(arr[i]);
});

/*

i   log         pets.length
----------------------------
0   toby        7
1   princess
2   samson
3   jill
4   bubbles
5   malu
6   lily

 */