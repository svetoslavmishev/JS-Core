let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>`;

describe('Test sharedObject', function () {
    describe('Initial tests', function () {
        it('initial name value must be null', function () {
            expect(sharedObject.name).to.be.null;
        });
        it('initial income value must be null', function () {
            expect(sharedObject.income).to.be.null;
        });
    });
    describe('ChangeName tests', function () {
        it('test with an empty string (name should be null)', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it('test with a non-empty string (name should be string)', function () {
            sharedObject.changeName('Ivan');
            expect(sharedObject.name).to.be.equal('Ivan');
        });
        it('test with an empty string (name field should be null)', function () {
            sharedObject.changeName('Unufri');
            sharedObject.changeName('');
            expect($('#name').val()).to.be.equal('Unufri');
        });
        it('test with a non-empty string (name field should be string)', function () {
            sharedObject.changeName('Petko');
            expect($('#name').val()).to.be.equal('Petko');
        });
    });
    describe('ChangeIncome tests', function () {
        it('test with a string (income should be null)', function () {
            sharedObject.changeIncome('Sofiq');
            expect(sharedObject.income).to.be.null;
        });
        it('test with negative number (income should not be changed)', function () {
            sharedObject.changeIncome(10);
            sharedObject.changeIncome(-10);
            expect(sharedObject.income).to.be.equal(10);
        });
        it('test with fractions (income should not be changed)', function () {
            sharedObject.changeIncome(10);
            sharedObject.changeIncome(3.14);
            expect(sharedObject.income).to.be.equal(10);
        });
        it('test with zero (income should not be changed)', function () {
            sharedObject.changeIncome(10);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(10);
        });
        it('test with zero (income should be string)', function () {
            sharedObject.changeIncome(20);
            expect(sharedObject.income).to.be.equal(20);
        });
        it('test with a string (income field should not be changed)', function () {
            sharedObject.changeIncome(10);
            sharedObject.changeIncome('Sofiq');
            expect($('#income').val()).to.be.equal('10');
        });
        it('test with negative number (income field should not be changed)', function () {
            sharedObject.changeIncome(10);
            sharedObject.changeIncome(-10);
            expect($('#income').val()).to.be.equal('10');
        });
        it('test with fractions (income should not be changed)', function () {
            sharedObject.changeIncome(10);
            sharedObject.changeIncome(3.14);
            expect($('#income').val()).to.be.equal('10');
            ;
        });
        it('test with zero (income should not be changed)', function () {
            sharedObject.changeIncome(10);
            sharedObject.changeIncome(0);
            expect($('#income').val()).to.be.equal('10');
        });
        it('test with zero (income should be string)', function () {
            sharedObject.changeIncome(20);
            expect($('#income').val()).to.be.equal('20');
        });


    });
    describe('UpdateName tests', function () {
        it('test with an empry string (name field should be null)', function () {
            sharedObject.changeName('Krasi');
            $('#name').val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Krasi');
        });
        it('test with an emprty string (name field should be string)', function () {
            sharedObject.changeName('Petar');
            $('#name').val('Vasko');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Vasko');
        });
    });
    describe('UpdateIncome tests', function () {
        it('test with an empty string (name field should be null)', function () {
            sharedObject.changeIncome(9);
            $('#income').val('');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(9);
        });
        it('test with a string (name field should be null)', function () {
            sharedObject.changeIncome(9);
            $('#income').val('Lovech');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(9);
        });
        it('test with fractions (name field should be null)', function () {
            sharedObject.changeIncome(9);
            $('#income').val('1.23');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(9);
        });
        it('test with zero (name field should be null)', function () {
            sharedObject.changeIncome(9);
            $('#income').val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(9);
        });
        it('test with negative number (name field should be null)', function () {
            sharedObject.changeIncome(9);
            $('#income').val('-10');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(9);
        });
        it('test with negative number (name field should be null)', function () {
            sharedObject.changeIncome(9);
            $('#income').val('99');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(99);
        });
    });
});
