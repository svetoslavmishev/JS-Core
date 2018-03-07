function calculate() {
    let num1, num2, result;

    function init(selector1, selector2, resultSelector) {
        num1 = $(selector1);
        num2 = $(selector2);
        result = $(resultSelector);
    }

    function add() {
        result.val(Number(num1.val()) + Number(num2.val()));
    }

    function subtract() {
        result.val(Number(num1.val()) - Number(num2.val()));
    }

    return {init, add, subtract};
}