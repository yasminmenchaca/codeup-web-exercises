// function mutation(arr) {
//   var firstWord = arr[0].toLowerCase();
//   var secondWord = arr[1].toLowerCase();

//   for (var i = 0; i < secondWord.length; i++) {
//     if (firstWord.indexOf(secondWord[i]) === -1) return false;
//   }

//   for (var letter of secondWord) {
//     if (firstWord.indexOf(letter) === -1) return false;
//   }

//   for (var letter of secondWord) {
//     if (!firstWord.includes(letter)) return false;
//   }

//   return true;
// }

// console.log(mutation(["hello", "hey"]));

const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
// array.find(function(currentValue, index, arr),thisValue)
// console.log(found);

var str = "Mr Blue has a blue house and a blue car";
var res = str.replace("blue", "red");
// string.replace(searchvalue, newvalue)
// console.log(res);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
// array.filter(function(currentValue, index, arr), thisValue)
// console.log(result);

const egg = { name: "Humpty Dumpty" };
const newEgg = egg;
// newEgg.name = "Errr ... Not Humpty Dumpty";
// console.log(egg);

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  //   s = [2, 5, 7];
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
// console.log(s);

const user = {
  name: "bob",
  age: "25",
  pet: {
    name: "buzo",
    type: "dog",
  },
};

Object.freeze(user);
user.name = "joe";
user.pet.name = "max";
// console.log(user.name, user.pet.name);

//////////////////////////////////////////////////////////////////////////////

function nomNom(arr) {
  var num1 = arr[0] + arr[1];
  var num2 = arr[2];
  var totalArr = num1 + num2;
  var otherArr = [num1, num2];

  if (arr[0] < arr[1]) {
    return arr;
  } else if (num1 > num2) {
    return totalArr;
  } else {
    return otherArr;
  }
}

console.log(nomNom([1, 2, 3])); // ➞ [1, 2, 3]
console.log(nomNom([2, 1, 3])); // ➞ [3, 3]
console.log(nomNom([8, 5, 9])); // ➞ [22]

/* 
A number can eat the number to the right of it if it's smaller than itself. After eating that number, it becomes the sum of itself and that number. Your job is to create a function that returns the final array after the leftmost element has finished "eating".

Examples
[5, 3, 7] ➞ [8, 7] ➞ [15]

// 5 eats 3 to become 8
// 8 eats 7 to become 15
[5, 3, 9] ➞ [8, 9]

// 5 eats 3 to become 8
// 8 cannot eat 9, since 8 < 9
 
Test input contains only an array of numbers. 
*/
