define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    exports.__esModule = true;
    var html = "<div data-bind=\"{component:componentName}\"></div>";
    var ViewModel = /** @class */ (function () {
        function ViewModel(params, componentInfos) {
            this.componentName = ko.observable("example-component");
        }
        return ViewModel;
    }());
    var cfg = {
        viewModel: {
            createViewModel: function (params, componentInfos) {
                return new ViewModel(params, componentInfos);
            }
        },
        template: html
    };
    ko.components.register("main-hub", cfg);
});
