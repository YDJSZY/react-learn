/**
 * Created by luwenwei on 17/2/5.
 */
var env = process.env.NODE_ENV;
const webpackMerge = require('webpack-merge');
if(env === "development"){
    module.exports = webpackMerge(require("./webpack.base.conf"),require("./config/webpack.dev.conf"));
}else if(env === "production"){
    module.exports = webpackMerge(require("./webpack.base.conf"),require("./config/webpack.prod.conf"))
}else if(env === "server"){
    module.exports = webpackMerge(require("./webpack.devServerBase"),require("./config/webpack.devServer"))
}