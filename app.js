/// <reference path="UICalculator.ts" />
/// <reference path="Operation.ts" />
window.onload = function () {
    var el = document.getElementById('content');
    var operation = new Calculator.Operation();

    var calculator = new Calculator.UICalculator(el, operation);
};
//# sourceMappingURL=app.js.map
