import * as ko from "knockout"


let c = (name, dirname) => ko.components.register(name, {
    require:"components/"+dirname+name})

c("example-component", "example-component/")

