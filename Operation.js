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
//# sourceMappingURL=Operation.js.map
