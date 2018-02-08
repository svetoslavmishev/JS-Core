"use strict";

function aggregateTable(input) {
    let sum = 0;
    let towns = [];
    let incomes = [];

    for (let i = 0; i < input.length; i++) {
        let data = input[i].split('|').filter(x => x != '');
        let town = data[0].trim();
        let income = Number(data[1].trim());
        towns.push(town);
        incomes.push(income);
    }
    console.log(towns.join(', ') + '\n' + incomes.reduce((a, b) => a + b));
}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);