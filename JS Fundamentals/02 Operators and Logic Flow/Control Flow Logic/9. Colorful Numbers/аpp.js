function colorfulNumbers(num) {

    let list = '<ul>\n'

    for (var i = 1; i <= num; i++) {
        if (i % 2 != 0) {
            list += `  <li><span style='color:green'>${i}</span></li>` + '\n';
        } else {
            list += `  <li><span style='color:blue'>${i}</span></li>` + '\n';
        }
    }

    list += '</ul>'
    console.log(list);

}
colorfulNumbers(10);