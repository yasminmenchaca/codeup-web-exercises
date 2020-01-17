/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODO: fill in your name and email and add some programming languages you know to the languages array

// TODO: replace the `var` keyword with `const`, then try to reassign a variable declared as `const`

// my answer
const name = 'yasmin';
const email = 'yasmin@email.com';
const languages = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];

// TODO: rewrite the object literal using object property shorthand

//object property shorthand & my answer
const user = {
    name,
    email,
    languages
};

users.push({
    name: name,
    email: email,
    languages: languages
});

// TODO: replace `var` with `let` in the following variable declarations
// my answer
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//     return emails.push(user.email);
// });

// my answer
users.forEach(user => {
    emails.push(user.email);
});



// users.forEach(function(user) {
//     return names.push(user.name);
// });

// my answer
users.forEach(user => {
    names.push(user.name);
});

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function (user) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition

    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;

    const {name, email, languages} = user; // my answer

    // TODO: rewrite the assignment below to use template strings

    // my answer
    developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`);
});

//     developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
// });

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function(developer) {

// my answer
for (let developer of developers) {

    // TODO: rewrite the assignment below to use template strings

    //list += '<li>' + developer + '</li>';

    // my answer
    list += `<li>${developer}</li>`;

}
list += '</ul>';

document.getElementById("message").innerHTML = list;