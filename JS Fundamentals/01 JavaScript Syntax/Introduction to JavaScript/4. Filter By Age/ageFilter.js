function ageFilter(min, firstName, firstAge, secondName, secondAge) {

    let firstPerson = { name: firstName, age: firstAge };
    let secondPerson = { name: secondName, age: secondAge };

    if (firstPerson.age >= min) {
        console.log(firstPerson);
    }

    if (secondPerson.age >= min) {
        console.log(secondPerson);
    }
}

ageFilter(12, 'Ivan', 15, 'Asen', 9);
ageFilter(19, 'Pesho', 119, 'Gosho', 20);
