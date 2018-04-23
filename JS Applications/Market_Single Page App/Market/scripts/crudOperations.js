function registerUser(ev) {
    ev.preventDefault();
    let username = $('#registerUsername').val();
    let password = $('#registerPasswd').val();
    let name = $('#registerName').val();

    auth.register(username, password, name)
        .then(function (res) {
            auth.saveSession(res);
            showHideMenuLinks();
            displayUserHome();
            auth.showInfo('User registration successful.');
            $('#registerUsername').val('');
            $('#registerPasswd').val('');
            $('#registerName').val('');
        }).catch(auth.handleAjaxError);
}

function loginUser(ev) {
    ev.preventDefault();
    let username = $('#loginUsername').val();
    let password = $('#loginPasswd').val();

    auth.login(username, password)
        .then(function (res) {
            auth.saveSession(res);
            displayUserHome();
            showHideMenuLinks();
            auth.showInfo('Login successful.');
            $('#loginUsername').val('');
            $('#loginPasswd').val('');
        }).catch(auth.handleAjaxError);
}

function logoutUser() {
    auth.logout();
    sessionStorage.clear();
    showHomeView();
    showHideMenuLinks();
    auth.showInfo('Logout successful.');
}

function displayUserHome() {
    $('#viewUserHomeHeading').hide();
    $('#viewUserHomeHeading').text('Welcome, ' + sessionStorage.getItem('username') + '!').show();
    showUserHomeView();
}

function displayAllProducts() {
    requester.get('appdata', 'products', 'kinvey')
        .then(function (res) {
            showShopView();
            let shopContainer = $('#shopProducts tbody');
            shopContainer.empty();

            (async function () {
                res.forEach(p => {
                    p.price = Number(p.price).toFixed(2)
                });
                res.sort((a, b) => a.price - b.price);
                let shopList = await $.get('templates/tableProducts.html');
                let template = Handlebars.compile(shopList);
                let context = {
                    products: res
                };

                let templateToHtml = template(context);
                shopContainer.append(templateToHtml);

                $('.purchase').on('click', purchaseProduct);
            })();

        }).catch(auth.handleAjaxError);
}

function purchaseProduct() {
    let productId = $(this).closest('tr').attr('data-id');
    let name = $(this).closest('tr').find(':first-child');
    let description = $(this).closest('tr').find(':nth-child(2)');
    let price = $(this).closest('tr').find(':nth-child(3)');

    requester.get('user', sessionStorage.getItem('id'), 'kinvey')
        .then(function (res) {
            updateCart(res);
        }).catch(auth.handleAjaxError);

    function updateCart(res) {
        if (!res.hasOwnProperty('cart')) {
            res.cart = {}
        }
        if (!res.cart[productId]) {
            res.cart[productId] = {};
            res.cart[productId].product = {};
            res.cart[productId].product.name = name[0].textContent;
            res.cart[productId].product.description = description.text();
            res.cart[productId].quantity = 1;
            res.cart[productId].product.price = price.text();
        } else {
            res.cart[productId].quantity = Number(res.cart[productId].quantity) + 1;
        }

        let data = res;

        requester.update('user', sessionStorage.getItem('id'), 'kinvey', data)
            .then(function (res) {
                displayCart();
                auth.showInfo('Product purchased.');
            }).catch(auth.hasOwnProperty);
    }
}

function displayCart() {
    requester.get('user', sessionStorage.getItem('id'), 'kinvey')
        .then(function (res) {
            showCartView();
            let cartContainer = $('#cartProducts tbody');
            cartContainer.empty();
            let myCart = res['cart'];

            (async function () {
                let cartList = await $.get('templates/myCart.html');
                let template = Handlebars.compile(cartList);

                let productId;
                for (let prod in myCart) {
                    let context = {
                        id: prod,
                        name: myCart[prod].product.name,
                        description: myCart[prod].product.description,
                        quantity: Number(myCart[prod].quantity),
                        price: (Number(myCart[prod].product.price) * Number(myCart[prod].quantity)).toFixed(2)
                    };

                    let templateToHtml = template(context);
                    cartContainer.append(templateToHtml);

                    productId = prod;
                    $('.discart').on('click', discartProduct);
                }
            }())
        }).catch(auth.handleAjaxError)
}

function discartProduct() {
    let id = $(this).closest('tr').attr('data-id');

    requester.get('user', sessionStorage.getItem('id'), 'kinvey')
        .then(function (res) {
            delete res.cart[id];
            let data = res;

            requester.update('user', sessionStorage.getItem('id'), 'kinvey', data)
                .then(function (res) {
                    displayCart();
                    auth.showInfo('Product discarded.');
                }).catch(auth.handleAjaxError);

        }).catch(auth.handleAjaxError);
}



