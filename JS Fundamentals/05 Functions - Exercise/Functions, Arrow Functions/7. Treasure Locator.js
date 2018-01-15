function treasureLocator(arguments) {

    for (let i = 0; i < arguments.length; i += 2) {
        let x = arguments[i];
        let y = arguments[i + 1];

        let island = treasureOnIsland(x, y);

        if (island) {
            console.log(treasureOnIsland(x, y));
        } else {
            console.log('On the bottom of the ocean');
        }
    }

    function treasureOnIsland(x, y) {
        if (x >= 1 && x <= 3 && y >= 1 && y <= 3) {
            return 'Tuvalu';
        } else if (x >= 8 && x <= 9 && y >= 0 && y <= 1) {
            return 'Tokelau';
        } else if (x >= 5 && x <= 7 && y >= 3 && y <= 6) {
            return 'Samoa';
        } else if (x >= 0 && x <= 2 && y >= 6 && y <= 8) {
            return 'Tonga';
        } else if (x >= 4 && x <= 9 && y >= 7 && y <= 8) {
            return 'Cook';
        }
    }
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
treasureLocator([6, 4]);