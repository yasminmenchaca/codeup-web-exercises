"use strict";

// // mapbox
mapboxgl.accessToken = mapboxToken;

var coordinates = document.getElementById('coordinates');
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 0],
    zoom: 2
});

var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([0, 0])
    .addTo(map);

function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;

// }
//
// marker.on('dragend', onDragEnd);


    var darkSkyInfo = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + darkSkyKey + "/" + lngLat.lat + "," + lngLat.lng;

// // Pulling Weather
    $.get(darkSkyInfo).done(function (data) {

        // console.log(data);

        // // Converting Time
        var dateObject = new Date(data.daily.data[0].time * 1000);
        // console.log(dateObject.toString());

        var dateTomorrow = new Date(data.daily.data[1].time * 1000);

        var dateDayAfter = new Date(data.daily.data[2].time * 1000);

        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var todayDay = weekday[dateObject.getDay()];
        // console.log(todayDay);

        var tomorrowDay = weekday[dateTomorrow.getDay()];
        // console.log(tomorrowDay);

        var afterDay = weekday[dateDayAfter.getDay()];
        // console.log(afterDay);


        $('#mainDiv').append(
            '<div class="card-body text-center">' +
            '<h1 class="card-title">' +
            // Math.floor(data.daily.data[0].temperatureHigh) +
            // '&#176' +
            // '/' +
            '<strong> Right Now </strong>' +
            '<hr>' +
            '<strong> Current Temp: </strong>' + (data.currently.temperature).toFixed() +
            '&#176F' +
            // Math.floor(data.daily.data[0].temperatureLow) +
            // '&#176' +
            '</h1>' +
            // '<br>' +
            '<div id="icon">' +
            '</div>' +
            '<strong> Feels Like: </strong>' + (data.currently.apparentTemperature).toFixed() +
            '&#176F' +
            '<br>' +
            '<strong> Conditions: </strong>' + data.currently.summary +
            '<br>' +
            '<strong>Humidity: </strong>' + (data.currently.humidity * 100).toFixed() + '%' +
            '<br>' +
            '<strong>Wind: </strong>' + Math.floor(data.currently.windSpeed) + ' MPH' +
            '<br>' +
            '<strong>Pressure: </strong>' + data.currently.pressure.toFixed() +
            '</div>');

        if ((data.currently.icon) === "cloudy") {
            $('#icon').html('<img src="icons/wi-cloudy.svg">')
        }
        if ((data.currently.icon) === "clear-day") {
            $('#icon').html('<img src="icons/wi-day-sunny.svg">')
        }
        if ((data.currently.icon) === "clear-night") {
            $('#icon').html('<img src="icons/wi-night-clear.svg">')
        }
        if ((data.currently.icon) === "rain") {
            $('#icon').html('<img src="icons/wi-rain.svg">')
        }
        if ((data.currently.icon) === "snow") {
            $('#icon').html('<img src="icons/wi-snow.svg">')
        }
        if ((data.currently.icon) === "sleet") {
            $('#icon').html('<img src="icons/wi-sleet.svg">')
        }
        if ((data.currently.icon) === "wind") {
            $('#icon').html('<img src="icons/wi-windy.svg">')
        }
        if ((data.currently.icon) === "fog") {
            $('#icon').html('<img src="icons/wi-fog.svg">')
        }
        if ((data.currently.icon) === "partly-cloudy-day") {
            $('#icon').html('<img src="icons/wi-day-sunny-overcast.svg">')
        }
        if ((data.currently.icon) === "partly-cloudy-night") {
            $('#icon').html('<img src="icons/wi-night-partly-cloudy.svg">')
        }

        $('#todayDiv').append(
            '<div class="card-body text-center">' +
            '<h1 class="card-title">' +
            '<strong> Today </strong>' +
            '<hr>' +
            Math.floor(data.daily.data[0].temperatureHigh) +
            '&#176' +
            '/' +
            Math.floor(data.daily.data[0].temperatureLow) +
            '&#176' +
            '</h1>' +
            // '<br>' +
            '<div id="todayIcon">' +
            '</div>' +
            '<strong>Forecast: </strong>' + data.daily.data[0].summary +
            '<br>' +
            '<strong>Humidity: </strong>' + (data.daily.data[0].humidity * 100).toFixed() + '%' +
            '<br>' +
            '<strong>Wind: </strong>' + Math.floor(data.daily.data[0].windSpeed) + ' MPH' +
            '<br>' +
            '<strong>Pressure: </strong>' + data.daily.data[0].pressure.toFixed() +
            '</div>');


        if ((data.daily.data[0].icon) === "cloudy") {
            $('#todayIcon').html('<img src="icons/wi-cloudy.svg">')
        }
        if ((data.daily.data[0].icon) === "clear-day") {
            $('#todayIcon').html('<img src="icons/wi-day-sunny.svg">')
        }
        if ((data.daily.data[0].icon) === "clear-night") {
            $('#todayIcon').html('<img src="icons/wi-night-clear.svg">')
        }
        if ((data.daily.data[0].icon) === "rain") {
            $('#todayIcon').html('<img src="icons/wi-rain.svg">')
        }
        if ((data.daily.data[0].icon) === "snow") {
            $('#todayIcon').html('<img src="icons/wi-snow.svg">')
        }
        if ((data.daily.data[0].icon) === "sleet") {
            $('#todayIcon').html('<img src="icons/wi-sleet.svg">')
        }
        if ((data.daily.data[0].icon) === "wind") {
            $('#todayIcon').html('<img src="icons/wi-windy.svg">')
        }
        if ((data.daily.data[0].icon) === "fog") {
            $('#todayIcon').html('<img src="icons/wi-fog.svg">')
        }
        if ((data.daily.data[0].icon) === "partly-cloudy-day") {
            $('#todayIcon').html('<img src="icons/wi-day-sunny-overcast.svg">')
        }
        if ((data.daily.data[0].icon) === "partly-cloudy-night") {
            $('#todayIcon').html('<img src="icons/wi-night-partly-cloudy.svg">')
        }


        $('#mainDiv2').append(
            '<div class="card-body text-center">' +
            '<h1 class="card-title">' +
            '<strong>' + tomorrowDay + '</strong>' +
            '<hr>' +
            Math.floor(data.daily.data[1].temperatureHigh) +
            '&#176' +
            '/' +
            Math.floor(data.daily.data[1].temperatureLow) +
            '&#176' +
            '</h1>' +
            // '<br>' +
            '<div id="icon2">' +
            '</div>' +
            '<strong>Forecast: </strong>' + data.daily.data[1].summary +
            '<br>' +
            '<strong>Humidity: </strong>' + (data.daily.data[1].humidity * 100).toFixed() + '%' +
            '<br>' +
            '<strong>Wind: </strong>' + Math.floor(data.daily.data[1].windSpeed) + ' MPH' +
            '<br>' +
            '<strong>Pressure: </strong>' + data.daily.data[1].pressure.toFixed() +
            '</div>');


        if ((data.daily.data[1].icon) === "cloudy") {
            $('#icon2').html('<img src="icons/wi-cloudy.svg">')
        }
        if ((data.daily.data[1].icon) === "clear-day") {
            $('#icon2').html('<img src="icons/wi-day-sunny.svg">')
        }
        if ((data.daily.data[1].icon) === "clear-night") {
            $('#icon2').html('<img src="icons/wi-night-clear.svg">')
        }
        if ((data.daily.data[1].icon) === "rain") {
            $('#icon2').html('<img src="icons/wi-rain.svg">')
        }
        if ((data.daily.data[1].icon) === "snow") {
            $('#icon2').html('<img src="icons/wi-snow.svg">')
        }
        if ((data.daily.data[1].icon) === "sleet") {
            $('#icon2').html('<img src="icons/wi-sleet.svg">')
        }
        if ((data.daily.data[1].icon) === "wind") {
            $('#icon2').html('<img src="icons/wi-windy.svg">')
        }
        if ((data.daily.data[1].icon) === "fog") {
            $('#icon2').html('<img src="icons/wi-fog.svg">')
        }
        if ((data.daily.data[1].icon) === "partly-cloudy-day") {
            $('#icon2').html('<img src="icons/wi-day-sunny-overcast.svg">')
        }
        if ((data.daily.data[1].icon) === "partly-cloudy-night") {
            $('#icon2').html('<img src="icons/wi-night-partly-cloudy.svg">')
        }

        $('#mainDiv3').append(
            '<div class="card-body text-center">' +
            '<h1 class="card-title">' +
            '<strong>' + afterDay + '</strong>' +
            '<hr>' +
            Math.floor(data.daily.data[2].temperatureHigh) +
            '&#176' +
            '/' +
            Math.floor(data.daily.data[2].temperatureLow) +
            '&#176' +
            '</h1>' +
            // '<br>' +
            '<div id="icon3">' +
            '</div>' +
            '<strong>Forecast: </strong>' + data.daily.data[2].summary +
            '<br>' +
            '<strong>Humidity: </strong>' + (data.daily.data[2].humidity * 100).toFixed() + '%' +
            '<br>' +
            '<strong>Wind: </strong>' + Math.floor(data.daily.data[2].windSpeed) + ' MPH' +
            '<br>' +
            '<strong>Pressure: </strong>' + data.daily.data[2].pressure.toFixed() +
            '</div>');

        if ((data.daily.data[2].icon) === "cloudy") {
            $('#icon3').html('<img src="icons/wi-cloudy.svg">')
        }
        if ((data.daily.data[2].icon) === "clear-day") {
            $('#icon3').html('<img src="icons/wi-day-sunny.svg">')
        }
        if ((data.daily.data[2].icon) === "clear-night") {
            $('#icon3').html('<img src="icons/wi-night-clear.svg">')
        }
        if ((data.daily.data[2].icon) === "rain") {
            $('#icon3').html('<img src="icons/wi-rain.svg">')
        }
        if ((data.daily.data[2].icon) === "snow") {
            $('#icon3').html('<img src="icons/wi-snow.svg">')
        }
        if ((data.daily.data[2].icon) === "sleet") {
            $('#icon3').html('<img src="icons/wi-sleet.svg">')
        }
        if ((data.daily.data[2].icon) === "wind") {
            $('#icon3').html('<img src="icons/wi-windy.svg">')
        }
        if ((data.daily.data[2].icon) === "fog") {
            $('#icon3').html('<img src="icons/wi-fog.svg">')
        }
        if ((data.daily.data[2].icon) === "partly-cloudy-day") {
            $('#icon3').html('<img src="icons/wi-day-sunny-overcast.svg">')
        }
        if ((data.daily.data[2].icon) === "partly-cloudy-night") {
            $('#icon3').html('<img src="icons/wi-night-partly-cloudy.svg">')
        }

// Temperature Converter
        function fToC(fahrenheit) {
            var fTemp = fahrenheit,
                fToCel = (fTemp - 32) * 5 / 9;

            return fToCel;
        }

    });

}

marker.on('dragend', onDragEnd);
