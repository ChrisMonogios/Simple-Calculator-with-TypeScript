/// <reference path="IOperation.ts" />

module Calculator {
    export class Operation implements IOperation {
        constructor() {
        }

        addition = (x: number, y: number): number => {
            return x + y;
        };

        subtraction = (x: number, y: number): number => {
            return x - y;
        };

        multiplication = (x: number, y: number): number => {
            return x * y;
        };

        division = (x: number, y: number): number => {
            return x / y;
        };

    }
} 