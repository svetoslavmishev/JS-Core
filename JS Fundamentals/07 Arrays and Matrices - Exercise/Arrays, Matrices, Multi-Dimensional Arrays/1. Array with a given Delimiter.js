function arrayWithDelimiter(args) {

    let delimiter = args.pop();
    return args.join(delimiter);

}

console.log(arrayWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']));
console.log(arrayWithDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']));

