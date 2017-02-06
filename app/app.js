/**
 * Created by luwenwei on 17/2/5.
 */
const React = require("react");
const ReactDom = require("react-dom");
import "whatwg-fetch";
require("./route/nav");
require("./route/routes");
require("babel-polyfill");
async function getMyInfo() {
    var response = await fetch('./package.json');
    var data = await response.json();
    console.log(data)
    var d = await fetch('../data.json');
    var da = await d.json();
    console.log(da)

        /*.then(function(response) {
            console.log(response.json())
            return response.json()
        }).then(function(json) {
        console.log('parsed json', json)
    }).catch(function(ex) {
        console.log('parsing failed', ex)
    })*/
}
getMyInfo();

console.log(12)


