function sortArrayByTwoCriteria(args) {

    let sortedArray = args.sort((a, b) => {
        if (a.length - b.length < 0) {
            return -1;
        } else if (a.length - b.length > 0) {
            return 1;
        } else if (a.length - b.length === 0) {
            return a > b;
        }
    });
    console.log(sortedArray.join('\n'));
}

sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']);












