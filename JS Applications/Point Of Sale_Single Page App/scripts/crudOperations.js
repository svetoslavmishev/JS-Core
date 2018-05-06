function registerUser(ev) {
    ev.preventDefault();
    let username = $('#username-register').val();
    let password = $('#password-register').val();
    let repeatPassword = $('#password-register-check').val();

    if (RegExp('^[a-zA-Z0-9]{5,}$').test(username)) {
        if (password !== '') {
            if (password === repeatPassword) {
                auth.register(username, password)
                    .then(function (res) {
                        auth.saveSession(res);
                        showMenuLinks();
                        getActiveReceipt();
                        auth.showInfo('User registration successful.');
                        $('#username-register').val('');
                        $('#password-register').val('');
                        $('#password-register-check').val('');
                    }).catch(auth.handleAjaxError)
            } else {
                auth.showError('Passwords do not match.')
            }
        } else {
            auth.showError('A password should contain only english alphabet letters and digits.')
        }
    } else {
        auth.showError('A username should be at least 5 characters long and should contain only english alphabet letters.')
    }
}

function loginUser(ev) {
    ev.preventDefault();
    let username = $('#username-login').val();
    let password = $('#password-login').val();

    if (RegExp('^[a-zA-Z0-9]{5,}$').test(username)) {
        if (password !== '') {
            auth.login(username, password)
                .then(function (res) {
                    auth.saveSession(res);
                    showMenuLinks();
                    getActiveReceipt();
                    auth.showInfo('User login successful.');
                    $('#username-login').val('');
                    $('#password-login').val('');
                }).catch(auth.handleAjaxError)
        } else {
            auth.showError('A password should contain only english alphabet letters and digits.')
        }
    } else {
        auth.showError('A username should be at least 5 characters long and should contain only english alphabet letters.')
    }
}

function logoutUser() {
    auth.logout()
        .then(function (res) {
            sessionStorage.clear();
            showMenuLinks();
            auth.showInfo('Logout successful.');
        }).catch(auth.handleAjaxError);
}

function getActiveReceipt() {
    let endpoint = `receipts?query={"_acl.creator":"${sessionStorage.getItem('id')}","active":"true"}`;
    requester.get('appdata', endpoint, 'kinvey')
        .then(function (res) {
            if (res.length === 0) {
                let data = {"active": true, "productCount": 0, "total": 0};
                requester.post('appdata', 'receipts', 'kinvey', data)
                    .then(function (res) {
                        $('#create-receipt-form input[name="receiptId"]').val(res[0]._id);
                        $('#create-receipt-form input[name="productCount"]').val();
                        let total = $($('#create-receipt-form div')[3]).text();
                        $('#create-receipt-form input[name="total"]').val(total);
                        createRecieptView();
                    }).catch(auth.handleAjaxError)
            } else {
                requester.get('appdata', `entries?query={"receiptId":"${res[0]._id}"}`, 'kinvey')
                    .then(function (res) {
                        displayActiveReceiptWithEntries(res);
                        createRecieptView();
                    }).catch(auth.handleAjaxError);
            }
        }).catch(auth.handleAjaxError);
}


function displayActiveReceiptWithEntries(res) {
    let container = $('#active-entries');
    container.empty();
    let sum = [];
    (async function () {
        res.forEach(el => {
            el.total = (Number(el.qty) * Number(el.price)).toFixed(2);
            el.price = (Number(el.price)).toFixed(2);
            sum.push(el.total)
        });
        sum = sum.reduce((a, b) => Number(a) + Number(b), 0);

        let entry = await $.get('templates/active-receipt.hbs');
        let template = Handlebars.compile(entry);
        let context = {
            entry: res
        };
        let templateToHtml = template(context);
        container.append(templateToHtml);

        $('.delete').on('click', deleteProduct);

    })();

    $($('#create-receipt-form div')[3]).text(sum.toFixed(2));

    //SAVE PARAMS IN HIDDEN FIELDS
    $('#create-receipt-form input[name="receiptId"]').val(res[0].receiptId);
    $('#create-receipt-form input[name="productCount"]').val(res.length);
    let total = $($('#create-receipt-form div')[3]).text();
    $('#create-receipt-form input[name="total"]').val(total);
}


function deleteProduct() {
    let id = $(this).closest('div[data-id]').attr('data-id');

    requester.remove('appdata', `entries/${id}`, 'kinvey')
        .then(function (res) {
            getActiveReceipt();
            auth.showInfo('Entry removed');
        }).catch(auth.handleAjaxError);
}

function addEntry(ev) {
    ev.preventDefault();
    let product = $('#create-entry-form input[name="type"]').val();
    let quantity = $('#create-entry-form input[name="qty"]').val();
    let price = $('#create-entry-form input[name="price"]').val();

    let data = {
        "type": product,
        "qty": Number(quantity),
        "price": Number(price),
        "receiptId": $('#create-receipt-form input[name="receiptId"]').val()
    };

    requester.post('appdata', 'entries', 'kinvey', data)
        .then(function (res) {
            getActiveReceipt();
            $('#create-entry-form').trigger('reset');
        }).catch(auth.handleAjaxError)
}

function checkoutReceipt(ev) {
    ev.preventDefault();
    let receiptId = $('#create-receipt-form input[name="receiptId"]').val();
    let productCount = $('#create-receipt-form input[name="productCount"]').val();
    let total = $('#create-receipt-form input[name="total"]').val();
    let data = {
        "active": false,
        "productCount": productCount,
        "total": total
    };

    // requester.update('appdata', `receipts/${receiptId}`, 'kinvey', data)
    //     .then(function (res) {
    //
    //         console.log(res);
    //
    //         auth.showInfo('Receipt checked out');
    //         console.log('IT IS FORM AND SHOULD TRIGGER RESET HIDDEN FIELDS');
    //     }).catch(auth.handleAjaxError);

}

function overView(ev) {
    ev.preventDefault();

    requester.get('appdata', `receipts?query={"_acl.creator":"kid_HJKfbAghG","active":"false"}`, 'kinvey')
    //requester.get('appdata', `receipts?query={"_acl.creator":"${sessionStorage.getItem('id')}","active":"false"}`, 'kinvey')
        .then(function (res) {
            dsipalyAllReceiptsByUser(res);
        }).catch(auth.handleAjaxError)
}

function dsipalyAllReceiptsByUser(res) {
    (async function () {
        let container = $('#all-receipt-view').find('.table');
        container.empty();

        let totalSum = 0;
        res.forEach(el => {
            totalSum = totalSum + Number(el.total);
            el.date = formatDate(el._kmd.ect);
        });

        let allReceipts = await $.get('templates/all-receipts.hbs');
        let template = Handlebars.compile(allReceipts);
        let context = {receipt: res};

        let templateToHtml = template(context);
        container.append(templateToHtml);

        $('#totalSum').text(totalSum);
        $('.details').on('click', showDetails);

    }());

    myReceiptView();
}

function showDetails() {
    let detailId = $(this).closest('div[data-id]').attr('data-id');

    requester.get('appdata', `entries?query={"receiptId":"${detailId}"}`, 'kinvey')
        .then(function (res) {
            (async function () {
                let detailContainer = $('#receipt-details-view').find('.table');
                detailContainer.empty();

                res.forEach(el => {
                    el.totalSum = (Number(el.price) * Number(el.qty)).toFixed(2);
                });

    showReceiptDetails();            let details = await $.get('templates/receipt-details.hbs');
                let template = Handlebars.compile(details);
                let context = {detail: res};

                let templateToHtml = template(context);
                detailContainer.append(templateToHtml);

                showReceiptDetails();
            }());
        }).catch(auth.handleAjaxError);
}
