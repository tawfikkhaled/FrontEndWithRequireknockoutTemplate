define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    exports.__esModule = true;
    exports.template = exports.viewModel = void 0;
    var html = "<div data-bind=\"text:message\"></div>";
    var ViewModel = /** @class */ (function () {
        function ViewModel(params, componentInfos) {
            this.message = ko.observable("this is an example of a component!");
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
    var viewModel = cfg.viewModel;
    exports.viewModel = viewModel;
    var template = cfg.template;
    exports.template = template;
});
