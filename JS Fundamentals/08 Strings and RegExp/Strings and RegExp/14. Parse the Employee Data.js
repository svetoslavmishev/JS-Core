"use strict";

function employeeData(input) {
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9]\d*) - ([A-Za-z0-9\- ]+)$/;

    for (let reg of input) {
        let match = regex.exec(reg);
        if (match) {
            console.log(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
        }
    }
}

employeeData(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee'
]);
