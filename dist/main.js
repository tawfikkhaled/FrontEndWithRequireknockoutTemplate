define(["require", "exports", "knockout", "css!main.css", "main-hub", "./components/_component-manifest", "axios"], function (require, exports, ko) {
    "use strict";
    exports.__esModule = true;
    exports.run = void 0;
    var axios = require('axios');
    axios.defaults.baseURL = "http://localhost:3010";
    var CreateTable = function () {
        var schema = window.document.getElementById("header");
        var tablename = window.document.getElementById("header");
        document.getElementById("header");
        document.getElementById("header");
    };
    function run(componentName) {
        console.log("running...");
        document.body.append(document.createElement(componentName));
        ko.applyBindings({});
    }
    exports.run = run;
});
