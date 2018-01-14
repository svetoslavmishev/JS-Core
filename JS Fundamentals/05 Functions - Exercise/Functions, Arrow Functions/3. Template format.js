function templateFormat(arguments) {

    let result = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<quiz>\n';

    for (let i = 0; i < arguments.length; i += 2) {
        let question = arguments[i];
        let answer = arguments[i + 1];

        result += '  <question>\n' + `    ${question}\n` + '  </question>\n';
        result +='  <answer>\n' + `    ${answer}\n` + '  </answer>\n';
    }

    result += '</quiz>';
    console.log(result);
}

templateFormat(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);
templateFormat(["Dry ice is a frozen form of which gas?", "Carbon Dioxide", "What is the brightest star in the night sky?", "Sirius"]);