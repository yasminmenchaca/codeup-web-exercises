let users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//TODO Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

// let result = users.filter(user => user.languages.length >= 3);
// console.log(result);

// TODO Use .map to create an array of strings where each element is a user's email address

// let userEmails = users.map(user => user.email);
// console.log(userEmails);

//TODO Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

// let totalYears = users.reduce((total, user)=>{
//     return total + user.yearsOfExperience / users.length;
// },0);
// console.log(totalYears); // 7

// // or

// let totalYears = users.reduce((runningTotal, user)=>{
//     return runningTotal += user.yearsOfExperience;
// },0);
// console.log(`Total years of experience: ${totalYears}
// Average: ${totalYears/users.length}`);

//TODO Use .reduce to get the longest email from the list of users.

// let longestEmail = userEmails.reduce(function(a, b){ return a.length > b.length ? a : b });
// console.log(longestEmail);

// // or

// let longestEmail = users.reduce((longestSoFar, user)=>{
//     if(user.email.length > longestSoFar.length) return user.email;
//     else return longestSoFar;
// }, "");

// console.log(longestEmail);

//TODO Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let greeting = users.reduce((userStack, user) => {
//     return userStack += user.name + ', ';
// }, "Your instructors are: ");
// greeting = greeting.substring(0, greeting.length - 2) + ".";
// console.log(greeting);

// // or

// const instructorNames = users.reduce((userStack, user) => {
//     return userStack.concat(user.name);
// }, []);

// console.log(instructorNames);
// console.log((`Your instructors are: ${instructorNames.join(', ')}.`));

//TODO BONUS: Use .reduce to get the unique list of languages from the list of users.

// let uniqueLang = users
//     .reduce((languages, usersLang) => {
//         usersLang.languages.forEach(function (language) {
//             if (languages.includes(language)) {
//             } else {
//                 languages.push(language);
//             }
//         });
//         return languages
//     }, []);

// console.log(uniqueLang);