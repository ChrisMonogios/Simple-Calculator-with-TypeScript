module Calculator {
    export interface IOperation {
        addition(x: number, y: number): number;
        subtraction(x: number, y: number): number;
        multiplication(x: number, y: number): number;
        division(x: number, y: number): number;
    }
}

