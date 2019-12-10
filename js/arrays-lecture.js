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
// var pets = ["Toby", "Princess", "Samson", "Jill", "Bubbles", "Malu", "Lily"];
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
// pets.forEach(function (pet, i, arr) {
//     console.log(pet);
//     // // or
//     // console.log(arr[i]);
// });

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

// var fruit = ["apple", "orange", "banana"];

// console.log((fruit));

// alert("FRUITS");

// // adds items to end of array
// fruit.push("pear", "pineapple", "grapes", "mango");

// // pushes apple off the array
// console.log(fruit.shift());

// // adds to beginning of array
// fruit.unshift("pear", "pineapple", "grapes", "mango");

// // gives last item in array
// console.log((fruit.pop()));

// console.log((fruit));

// console.log((fruit).indexOf("mango"));

// console.log((fruit.shift()));
// console.log((fruit.unshift("strawberry")));
// console.log((fruit.lastIndexOf("pineapple")));
// console.log((fruit[fruit.indexOf("pineapple")]));


//TODO: Adding Elements
/*
var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

console.log(daysOfTheWeek);
// ['Monday', 'Tuesday', 'Wednesday', 'Thursday']

// let's add 'Sunday' to the beginning of the week
daysOfTheWeek.unshift('Sunday');

console.log(daysOfTheWeek);
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']

// let's add 'Friday' and 'Saturday' to the end of the week
daysOfTheWeek.push('Friday', 'Saturday');

console.log(daysOfTheWeek);
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
*/


//TODO: Removing Elements
/*
var todoList = ['Take out the trash', 'Clean the car', 'Pay the bills'];

console.log('My to do list:');
console.log(todoList);
// ['Take out the trash', 'Clean the car', 'Pay the bills']

console.log('Completing the last item: ' + todoList[todoList.length - 1]);

// let's remove the last item
var removedItem = todoList.pop();

// log what we did
console.log('Task complete: ' + removedItem);

console.log(todoList);
// ['Take out the trash', 'Clean the car']

console.log('Completing the first item: ' + todoList[0]);

// let's remove the first item
var doneItem = todoList.shift();

// log what we did
console.log('Task complete: ' + doneItem);

console.log(todoList);
// ['Clean the car']
*/


/*
//TODO: Splitting

var namesString = "Joe,Bob,Sally";

console.log(namesString);
// Joe,Bob,Sally

var namesArray = namesString.split(',');

console.log(namesArray);
*/


/*
//TODO: Joining

var namesArray = ['Joe', 'Bob', 'Sally'];

console.log(namesArray);
// ['Joe', 'Bob', 'Sally']

var namesString = namesArray.join(', ');

console.log(namesString);
// Joe, Bob, Sally
*/

// var text = "The quick brown fox jumps over the lazy dog";
//
// text = text.toLowerCase()
//     .split(' ')
//     .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
//     .join(' ');
//
// console.log(text);

/*
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {

        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

console.log(titleCase("the quick brown fox jumped over the lazy dog"));
 */

//TODO: Slicing

/*
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var slice = colors.slice(2, 4);

console.table(colors); // colors is unchanged
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.table(slice); // ['yellow', 'green']

slice = colors.slice(3);
console.table(slice); // ['green', 'blue', 'indigo', 'violet']
 */

