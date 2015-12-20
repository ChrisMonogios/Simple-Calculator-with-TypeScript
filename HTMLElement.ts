module UIFramework {
    export class HTMLElement<T> {
        private name: string;
        private id: string;
        private element: any;
        private text: string;

        constructor(type: string, name: string) {
            this.name = name;
            this.element = document.createElement(type);
        }

        get Id(): string {
            return this.id;
        }

        set Id(value: string) {
            this.id = value;
        }

        get Text(): string {
            return this.text;
        }

        set Text(value: string) {
            this.text = value;
            this.element.innerHTML = this.text;
        }

        appendElementOnHtml = (appendTo: string): void => {
            document.getElementById(appendTo).appendChild(this.element);
        }

        addCallbackOnEvent = (event: string, callback: any): void => {
            this.element.addEventListener(event, callback, false);
        }
    }
} 