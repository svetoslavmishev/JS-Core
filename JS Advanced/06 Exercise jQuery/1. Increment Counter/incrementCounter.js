function increment(selector) {

    let div = $(selector);
    let textArea = $('<textarea>').addClass('counter').val(0).attr('disabled', true);
    let buttonIncrement = $('<button>').addClass('btn').attr('id', 'incrementBtn').text('Increment');
    let buttonAdd = $('<button>').addClass('btn').attr('id', 'addBtn').text('Add');
    let list = $('<ul>').addClass('results');

    buttonIncrement.on('click', function () {
        let result = textArea.val();
        textArea.val(++result);
        result++;
    });

    buttonAdd.on('click', function () {
        list.append($('<li>').text(`${textArea.val()}`));
    });

    div.append(textArea);
    div.append(buttonIncrement);
    div.append(buttonAdd);
    div.append(list);
}
