define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    exports.__esModule = true;
    var c = function (name, dirname) { return ko.components.register(name, {
        require: "components/" + dirname + name
    }); };
    c("example-component", "example-component/");
});
