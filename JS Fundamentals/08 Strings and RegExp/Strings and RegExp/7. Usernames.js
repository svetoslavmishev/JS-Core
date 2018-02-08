"use strict";

function usernames(input) {
    let email = input.map(e => e.split('@'));
    let name = email[0];
    let domain = email[1];

    let result = email.map(([name, domain]) => name + '.' + domain.split('.').map(d => d[0]).join(''));
    console.log(result.join(', '));
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
