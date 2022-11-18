/// <amd-dependency path="text!./example-component.html"/>
import * as ko from "knockout"

let html = require("text!./example-component.html")

class ViewModel {
    message : KnockoutObservable<string>
    constructor(params: any, componentInfos: KnockoutComponentTypes.ComponentInfo) {
        this.message = ko.observable("this is an example of a component!")
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

const viewModel = cfg.viewModel
const template = cfg.template
export {viewModel}
export {template}
