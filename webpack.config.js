/**
 * Created by luwenwei on 17/2/5.
 */
var env = process.env.NODE_ENV;
const webpackMerge = require('webpack-merge');
if(env === "development"){
    module.exports = webpackMerge(require("./webpack.base.conf"),require("./webpack.dev.conf"))
}else if(env === "production"){
    module.exports = webpackMerge(require("./webpack.base.conf"),require("./webpack.prod.conf"))
}