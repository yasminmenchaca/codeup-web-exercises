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

function eatNextNumber(arr) {
  var num1 = arr[0] + arr[1];
  var num2 = arr[2];

  var totalArr = num1 + num2;
  var otherArr = [num1, num2];

  if (num1 <= num2) {
    return totalArr;
  } else {
    return otherArr;
  }
}

console.log(eatNextNumber([5, 6, 10]));

// arr = [2, 2, 3]
// then [4, 3], arr[0] cannot be bigger than arr[1]
// arr[0] + arr[1] = [total]
