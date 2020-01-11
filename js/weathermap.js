"use strict";

// // Pulling Weather
$.ajax('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + darkSkyKey + '/29.4241,-98.4936').done(function (data) {

    console.log(data);

    $('#mainDiv').append(
        // '<div class="card">' +
        '<div class="card-body text-center">' +
        '<h1 class="card-title">' +
        Math.floor(data.daily.data[0].temperatureHigh) +
        '&#176' +
        '/' +
        Math.floor(data.daily.data[0].temperatureLow) +
        '&#176' +
        '</h1>' +
        // '<br>' +
        '<div id="icon">' +
        '</div>' +
        '<strong>Forecast: </strong>' + data.currently.summary +
        '<br>' +
        '<strong>Humidity: </strong>' + (data.currently.humidity * 100) + '%' +
        '<br>' +
        '<strong>Wind: </strong>' + Math.floor(data.currently.windSpeed) + ' MPH' +
        '<br>' +
        '<strong>Pressure: </strong>' + data.currently.pressure.toFixed() +
        // '</div>' +
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

    $('#mainDiv2').append(
        // '<div class="card">' +
        '<div class="card-body text-center">' +
        '<h1 class="card-title">' +
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
        '<strong>Humidity: </strong>' + (data.daily.data[1].humidity * 100) + '%' +
        '<br>' +
        '<strong>Wind: </strong>' + Math.floor(data.daily.data[1].windSpeed) + ' MPH' +
        '<br>' +
        '<strong>Pressure: </strong>' + data.daily.data[1].pressure.toFixed() +
        // '</div>' +
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
        // '<div class="card">' +
        '<div class="card-body text-center">' +
        '<h1 class="card-title">' +
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
        '<strong>Humidity: </strong>' + (data.daily.data[2].humidity * 100) + '%' +
        '<br>' +
        '<strong>Wind: </strong>' + Math.floor(data.daily.data[2].windSpeed) + ' MPH' +
        '<br>' +
        '<strong>Pressure: </strong>' + data.daily.data[2].pressure.toFixed() +
        // '</div>' +
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

    // // // Converting Time
    // var dateObject = new Date(data.currently.time * 1000);
    // console.log(dateObject.toString());

    // Temperature Converter
    function fToC(fahrenheit) {
        var fTemp = fahrenheit,
            fToCel = (fTemp - 32) * 5 / 9;

        return fToCel;
    }

});

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10.10,
    center: [-98.493482, 29.426026]
});
