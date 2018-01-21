function chessBoard(n) {
    console.log(`<div class="chessboard">`);

    for (var i = 1; i <= n; i++) {
        console.log(`  <div>`);
        let color = (i % 2 != 0) ? 'black' : 'white';

        for (var j = 1; j <= n; j++) {

            console.log(`    <span class="${color}"></span>`);
            color = (color == 'white') ? 'black' : 'white';
        }

        console.log(`  </div>`);
    }

    console.log(`</div>`);
}
chessBoard(3);