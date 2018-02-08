"use strict";

function formFilter(username, email, phone, input) {
    let usernameRegex = /<!([A-Za-z]+)!>/g;
    let emailRegex = /<@([A-Za-z]+)@>/g;
    let phoneRegex = /<\+([A-Za-z]+)\+>/g;

    for (let line of input) {
        line = line.replace(usernameRegex, username);
        line = line.replace(emailRegex, email);
        line = line.replace(phoneRegex, phone);
        console.log(line);
    }
}

formFilter('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);