/// <reference path="IUICalculator.ts" />
var Calculator;
(function (Calculator) {
    var UICalculator = (function () {
        function UICalculator(element, operation) {
            var _this = this;
            this._operationIcons = {
                "addition": "+",
                "subtraction": "-",
                "multiplication": "*",
                "division": "/"
            };
            this.createInputArea = function (id) {
                var inputEl = document.createElement('input');
                inputEl.id = id;
                _this.element.appendChild(inputEl);
            };
            this.createButton = function (id, text, callback) {
                var buttonEl = document.createElement('button');
                buttonEl.id = id;
                buttonEl.name = id;
                buttonEl.innerHTML = text;

                buttonEl.addEventListener("click", callback, false);
                _this.element.appendChild(buttonEl);
            };
            this.calculateOperation = function (firstOperand, secondOperand, operation) {
                var result = 0;
                switch (operation) {
                    case "addition":
                        result = _this.operation.addition(firstOperand, secondOperand);
                        break;
                    case "subtraction":
                        result = _this.operation.subtraction(firstOperand, secondOperand);
                        break;
                    case "multiplication":
                        result = _this.operation.multiplication(firstOperand, secondOperand);
                        break;
                    case "division":
                        result = _this.operation.division(firstOperand, secondOperand);
                        break;
                }

                return result;
            };
            this.operationOnClick = function (e) {
                _this.getValues(e.target.name);
                _this.validateValues(e.target.name);
            };
            this.getValues = function (operation) {
                _this._valFromMem = parseInt(document.getElementById("memory").innerHTML);
                _this._curInput = parseInt(document.getElementById("CalcInput").value);
            };
            this.validateValues = function (operation) {
                var inputElement = document.getElementById('CalcInput');
                var memElement = document.getElementById("memory");
                var symbolElement = document.getElementById("operationSymbol");

                if (isNaN(_this._curInput)) {
                    inputElement.innerHTML = _this._operationIcons[operation];
                } else if (!isNaN(_this._valFromMem)) {
                    var result = _this.calculateOperation(_this._valFromMem, _this._curInput, operation);
                    memElement.innerHTML = "" + result;
                } else {
                    memElement.innerHTML = "" + _this._curInput;
                }

                inputElement.value = "";
                inputElement.focus();
                symbolElement.innerHTML = _this._operationIcons[operation];
            };
            this.element = element;
            this.operation = operation;
            this.createInputArea("CalcInput");
            this.createButton("addition", "+", this.operationOnClick);
            this.createButton("subtraction", "-", this.operationOnClick);
            this.createButton("multiplication", "*", this.operationOnClick);
            this.createButton("division", "/", this.operationOnClick);
        }
        return UICalculator;
    })();
    Calculator.UICalculator = UICalculator;
})(Calculator || (Calculator = {}));
/// <reference path="IOperation.ts" />
var Calculator;
(function (Calculator) {
    var Operation = (function () {
        function Operation() {
            this.addition = function (x, y) {
                return x + y;
            };
            this.subtraction = function (x, y) {
                return x - y;
            };
            this.multiplication = function (x, y) {
                return x * y;
            };
            this.division = function (x, y) {
                return x / y;
            };
        }
        return Operation;
    })();
    Calculator.Operation = Operation;
})(Calculator || (Calculator = {}));
/// <reference path="UICalculator.ts" />
/// <reference path="Operation.ts" />
window.onload = function () {
    var el = document.getElementById('content');
    var operation = new Calculator.Operation();

    var calculator = new Calculator.UICalculator(el, operation);
};
