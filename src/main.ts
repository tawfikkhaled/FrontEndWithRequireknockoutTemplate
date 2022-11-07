

import "css!main.css"

import * as ko from 'knockout';
import "main-hub"
import "./components/_component-manifest"

import * as axiosType from "../node_modules/axios/index"
import "axios"
const axios = require('axios') as axiosType.Axios;
axios.defaults.baseURL = "http://localhost:3010"

let CreateTable = function() {
    let schema = window.document.getElementById("header")
    let tablename = window.document.getElementById("header")
    document.getElementById("header")
    document.getElementById("header")
}

export function run(componentName){
    console.log("running...")
    document.body.append(document.createElement(componentName))
    ko.applyBindings({} )
}