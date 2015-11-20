/// <reference path="IUICalculator.ts" />

module Calculator {
    export class UICalculator implements IUICalculator {
        private element: HTMLElement;
        private operation: IOperation;
        private _operationIcons: { [name: string]: string } = {
            "addition": "+",
            "subtraction": "-",
            "multiplication": "*",
            "division": "/"
        }
        private _valFromMem: number;
        private _curInput: number;

        constructor(element: HTMLElement, operation: IOperation) {
            this.element = element;
            this.operation = operation;
            this.createInputArea("CalcInput");
            this.createButton("addition", "+", this.operationOnClick);
            this.createButton("subtraction", "-", this.operationOnClick);
            this.createButton("multiplication", "*", this.operationOnClick);
            this.createButton("division", "/", this.operationOnClick);
        }

        createInputArea = (id: string): void => {
            var inputEl = document.createElement('input');
            inputEl.id = id;
            this.element.appendChild(inputEl);
        }

        createButton = (id: string, text: string, callback): void => {
            var buttonEl = document.createElement('button');
            buttonEl.id = id;
            buttonEl.name = id;
            buttonEl.innerHTML = text;

            buttonEl.addEventListener("click", callback, false);
            this.element.appendChild(buttonEl);
        }

        calculateOperation = (firstOperand: number, secondOperand: number, operation: string): number => {
            var result: number = 0;
            switch (operation) {
                case "addition":
                    result = this.operation.addition(firstOperand, secondOperand);
                    break;
                case "subtraction":
                    result = this.operation.subtraction(firstOperand, secondOperand);
                    break;
                case "multiplication":
                    result = this.operation.multiplication(firstOperand, secondOperand);
                    break;
                case "division":
                    result = this.operation.division(firstOperand, secondOperand);
                    break;
            }

            return result;
        }

        operationOnClick = (e): void => {
            this.getValues(e.target.name);
            this.validateValues(e.target.name);
        }

        getValues = (operation: string): void => {
            this._valFromMem = parseInt((<HTMLInputElement>document.getElementById("memory")).innerHTML);
            this._curInput = parseInt((<HTMLInputElement>document.getElementById("CalcInput")).value);
        }

        validateValues = (operation: string): void => {
            var inputElement = <HTMLInputElement>document.getElementById('CalcInput');
            var memElement = <HTMLInputElement>document.getElementById("memory");
            var symbolElement = <HTMLInputElement>document.getElementById("operationSymbol")

            if (isNaN(this._curInput)) {
                inputElement.innerHTML = this._operationIcons[operation];
            } else if (!isNaN(this._valFromMem)) {
                var result = this.calculateOperation(this._valFromMem, this._curInput, operation);
                memElement.innerHTML = "" + result;
            } else {
                memElement.innerHTML = "" + this._curInput;
            }

            inputElement.value = "";
            inputElement.focus();
            symbolElement.innerHTML = this._operationIcons[operation];
        }
    }
}