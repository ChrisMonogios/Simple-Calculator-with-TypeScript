/// <reference path="UICalculator.ts" />
/// <reference path="Operation.ts" />

window.onload = () => {
    var el = document.getElementById('content');
    var operation = new Calculator.Operation();

    var calculator = new Calculator.UICalculator(el, operation);
};