function rotateArray(args) {
    let repeat = Number(args.pop());

    for (let i = 0; i < repeat % args.length; i++) {
        args.unshift(args.pop());
    }

    console.log(args.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);