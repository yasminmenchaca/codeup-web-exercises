"use strict";

// TODO: Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

// const wait = (num) => new Promise(
//     (resolve) => setTimeout(resolve, num)
// );

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// TODO: Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

function getLastPush(input) {

    return fetch(`https://api.github.com/users/${input}/events/public`, {headers: {'Authorization': "token " + githubToken}})

        .then((data) => {
            return data.json()

        }).then((jsonData) => {
            // console.log(jsonData);

            return (`${jsonData[0].actor.display_login} recent commit was at ${jsonData[0].created_at} in the ${jsonData[0].repo.name} repo.`)
        });

}

getLastPush("yasminmenchaca").then((data) => console.log(data));
