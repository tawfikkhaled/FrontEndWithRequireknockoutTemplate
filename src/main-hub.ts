import * as ko from "knockout"

const html = `<div data-bind="{component:componentName}"></div>`

class ViewModel {
    componentName : KnockoutObservable<string>
    constructor(params: any, componentInfos: KnockoutComponentTypes.ComponentInfo) {
        this.componentName = ko.observable("example-component")
    }
}

const cfg: KnockoutComponentTypes.ComponentConfig = {
    viewModel: {

        createViewModel(params:any, componentInfos: KnockoutComponentTypes.ComponentInfo ) {
            return new ViewModel(params, componentInfos)
        }

    },
    template : html
}

ko.components.register("main-hub", cfg)
