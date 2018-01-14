function wordsUppercase(input) {

    let wordsUpper = input.toUpperCase();
    let words = extract(wordsUpper);
    words = words.filter(x => x != "");
    
    console.log(words.join(', '));

    function extract(words) {
        return wordsUpper.split(/\W+/);
    }
}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');