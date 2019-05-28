$(function () {
    let model = solve();
    model.init('#num1', '#num2', '#result');
    $('#sumButton').click(model.add);
    $('#subtractButton').click(model.subtract);

    function solve() {
        let s1;
        let s2;
        let result;

        function init(selector1, selector2, resultSelector) {
            s1 = $(selector1);
            s2 = $(selector2);
            result = $(resultSelector);
        }

        function add() {
            result.val(+s1.val() + +s2.val());
        }

        function subtract() {
            result.val(+s1.val() - +s2.val());
        }

        return {
            init,
            add,
            subtract
        }
    }
});