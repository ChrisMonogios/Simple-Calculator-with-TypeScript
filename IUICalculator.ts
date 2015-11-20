module Calculator {
    export interface IUICalculator {
        createInputArea: (id: string) => void;
        createButton: (id: string, text: string, callback) => void;
    }
}