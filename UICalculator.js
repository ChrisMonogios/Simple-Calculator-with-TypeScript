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
                if (isNaN(_this._curInput)) {
                    document.getElementById("operationSymbol").innerHTML = _this._operationIcons[operation];
                    return;
                }

                if (!isNaN(_this._valFromMem)) {
                    var result = _this.calculateOperation(_this._valFromMem, _this._curInput, operation);
                    document.getElementById("memory").innerHTML = "" + result;
                } else {
                    document.getElementById("memory").innerHTML = "" + _this._curInput;
                }

                var inputElement = document.getElementById('CalcInput');
                inputElement.value = "";
                inputElement.focus();
                document.getElementById("operationSymbol").innerHTML = _this._operationIcons[operation];
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
//# sourceMappingURL=UICalculator.js.map
