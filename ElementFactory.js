var UIFramework;
(function (UIFramework) {
    var ElementFactory = (function () {
        function ElementFactory() {
            this.build = function (type, name) {
                if (type === "input") {
                    return new UIFramework.HTMLElement(type, name);
                } else if (type === "button") {
                    return new UIFramework.HTMLElement(type, name);
                }
            };
        }
        return ElementFactory;
    })();
    UIFramework.ElementFactory = ElementFactory;
})(UIFramework || (UIFramework = {}));
//# sourceMappingURL=ElementFactory.js.map
