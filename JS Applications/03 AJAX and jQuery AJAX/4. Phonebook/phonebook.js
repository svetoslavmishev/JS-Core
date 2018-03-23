let loadBtn = $('#btnLoad');
let createBtn = $('#btnCreate');
let phonebook = $('#phonebook');
let baseUrl = 'https://phonebook-20e4f.firebaseio.com/phonebook';

loadBtn.on('click', loadContacts);
createBtn.on('click', createContacts);

function loadContacts() {
    $.ajax({
        method: 'GET',
        url: baseUrl + '.json'
    }).then(handleSuccess)
        .catch(handleError);

    function handleSuccess(data) {
        for (let key in data) {
            if (data[key] !== null) {
                let li = $(`<li>${data[key].name}: ${data[key].phone}: </li>`)
                    .append($(`<a href="#"> [Delete]</a>`)
                        .on('click', function () {
                            $.ajax({
                                method: 'DELETE',
                                url: baseUrl + `/${key}.json`
                            }).then(() => {
                                $(li).remove()
                            })
                                .catch(handleError)
                        }));
                phonebook.append(li);
            }
        }
    }
}

function createContacts() {
    let inputPerson = $('#person');
    let inputPhone = $('#phone');

    $.ajax({
        method: 'POST',
        url: baseUrl + '.json',
        data: JSON.stringify(
            {
                name: inputPerson.val(),
                phone: inputPhone.val()
            }
        ),
    }).then(appendContact)
        .catch(handleError);

    function appendContact() {
        if (inputPerson.val() !== '' && inputPhone.val() !== '') {
            let li = $(`<li>${inputPerson.val()}: ${inputPhone.val()}</li>`)
                .append($(`<a href="#"> [Delete]</a>`));
            phonebook.append(li);
            inputPerson.val('');
            inputPhone.val('');
        }
    }
}

function handleError(data) {
    console.log(data);
}
