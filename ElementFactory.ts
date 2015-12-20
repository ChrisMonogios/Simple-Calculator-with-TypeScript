module UIFramework {
    export class ElementFactory {
        constructor() { }

        build = (type: string, name: string): any => {
            if (type === "input") {
                return new HTMLElement<HTMLInputElement>(type, name);
            } else if (type === "button") {
                return new HTMLElement<HTMLButtonElement>(type, name);
            }
        }
    }
} 