function multiplicationTable(n) {

    let result = "";

    //FIRST STATIC ROW    
    console.log(`<table border="1">`);

    //FIRST DYNAMIC TABLE ROWS
    for (let i = 1; i <= n; i++) {
        result += `<th>${i}</th>`;
    }
    console.log(`  <tr><th>x</th>` + result + `</tr>`);
    result = "";

    //MIDDLE DYNAMIC TABLE N-ROWS
    for (let row = 1; row <= n; row++) {
        for (var col = 1; col <= n; col++) {
            result += `<td>${row * col}</td>`;
        }
        result = `  <tr><th>${row}</th>` + result + `</tr>`;
        console.log(result);
        result = "";
    }

    //LAST STATIC ROW
    console.log('</table>');
}
multiplicationTable(5);