(function () {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        // TODO: complete this method
        // hint: area = pi * radius^2
        getArea: function () {
            // TODO: return the proper value
            return Math.PI * Math.pow(this.radius, 2);
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding) {
                var circleArea;
                circleArea = Math.round(this.getArea());
            } else {
                circleArea = this.getArea();
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            console.log("Area of a circle with radius: " + this.radius + ", is: " + circleArea);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
    console.log("=======================================================");

    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();