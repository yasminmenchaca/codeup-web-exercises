(function () {
    "use strict";

    console.log(("planets-array.js"));

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);
    planets.unshift("The Sun"); //Adding "The Sun" to the beginning of the planets array.
    console.log((planets));


    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);
    planets.push("Pluto"); //Adding "Pluto" to the end of the planets array.
    console.log((planets));


    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);
    var theSun = planets.shift(); // deleted "The Sun" from the beginning
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);
    var pluto = planets.pop(); // deleted "Pluto" from the end
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf("Earth")); // finding the index of "Earth"

    console.log("Reversing the order of the planets array.");
    console.log(planets);
    console.log(planets.reverse()); // Reversing the order of the planets array.

    console.log("Sorting the planets array.");
    console.log(planets);
    console.log(planets.sort());

})();
