var UIFramework;
(function (UIFramework) {
    var HTMLElement = (function () {
        function HTMLElement(type, name) {
            var _this = this;
            this.appendElementOnHtml = function (appendTo) {
                document.getElementById(appendTo).appendChild(_this.element);
            };
            this.addCallbackOnEvent = function (event, callback) {
                _this.element.addEventListener(event, callback, false);
            };
            this.name = name;
            this.element = document.createElement(type);
        }
        Object.defineProperty(HTMLElement.prototype, "Id", {
            get: function () {
                return this.id;
            },
            set: function (value) {
                this.id = value;
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(HTMLElement.prototype, "Text", {
            get: function () {
                return this.text;
            },
            set: function (value) {
                this.text = value;
                this.element.innerHTML = this.text;
            },
            enumerable: true,
            configurable: true
        });

        return HTMLElement;
    })();
    UIFramework.HTMLElement = HTMLElement;
})(UIFramework || (UIFramework = {}));
//# sourceMappingURL=HTMLElement.js.map
