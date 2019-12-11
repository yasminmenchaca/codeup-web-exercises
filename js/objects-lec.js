"use strict";
console.log("objects lecture");

var car = {
    make: "toyota",
    model: "sienna",
    year: 2009,
    isTitled: true,
    options: ["4 wheel drive", "heated seats", "leather interior"],
    goGoGo: function (key) {
        if (key == "correct") {
            console.log("vroom");
        } else {
            console.log("...")
        }
    }
};

console.log("Car was made in " + car.year);
console.log(("Car make is " + car.make));
console.log(("Car has these options: " + car.options));
car.options.forEach((function(option){
    console.log(option)}));
car.goGoGo("key");

/*
var yasminCar = {
    make: "Scion",
    model: "tC",
    year: 2015,
    paidOff: true,
    options: ["power moon roof", "led taillights", "6.1-inch touchscreen audio system", "paddle shifters"],
    letsGoFast: function (option) {
        if (this.options.includes(option))
            console.log("here is some knowledge")
        else
            console.log("blah blah blah")
    }
}

yasminCar.letsGoFast("led taillights");
*/

// var truck = new Object();
// var cats = new Array();
//
// truck.make = "Tesla";
// truck.model = "CyberTruck";
// truck.year = 2022;
// truck.gogogo = function(){
//     console.log("VROOM");
// }

// cats[3]; // dont use this notation
// truck["model"]; // dont use this notation
// truck["numberOfWheels"]


// var cars = [
//     car,
//     {
//         make: "Scion",
//         model: "tC",
//         year: 2015,
//         report: function(){
//             console.log(this.year + " " + this.make + " " + this.model);
//         }
//     },
//     {
//         make: "toyota",
//         model: "sienna",
//         year: 2009,
//         report: function(){
//             console.log(this.year + " " + this.make + " " + this.model);
//         }
//     },
//     {
//         make: "subuaru",
//         model: "crosstrek",
//         year: 2017,
//         report: function(){
//             console.log(this.year + " " + this.make + " " + this.model);
//         }
//     }
// ];
//
// car.report = function(){
//     console.log(this.year + " " + this.make + " " + this.model);
// };
//
// cars.forEach(function(car) {
//     car.report();
// });




var pet = { //do not do this.
};

var pets = [
    pet,
    {
        name: "molly",
        breed: "pitbull",
        age: 8,
        report: function(){
            console.log(this.age + " " + this.breed + " " + this.name);
        }
    },
    {
        name: "mike",
        breed: "lab/golden mix",
        age: 2,
        report: function(){
            console.log(this.age + " " + this.breed + " " + this.name);
        }
    },
    {
        name: "toby",
        breed: "mutt",
        age: 6,
        report: function(){
            console.log(this.age + " " + this.breed + " " + this.name);
        }
    }
];

pet.report = function(){
    console.log(this.age + " " + this.breed + " " + this.name);
};

pets.forEach(function(pet) {
    pet.report();
});


/*
console.log("Car was made in " + yasminCar.year);
console.log(("Car make is " + yasminCar.make));
console.log(("Car has these options: " + yasminCar.options));
yasminCar.options.forEach((function(option){
    console.log(option)}));
yasminCar.letsGoFast("correct");
yasminCar.letsGoFast("key");
 */