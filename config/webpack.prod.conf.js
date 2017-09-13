/**
 * Created by luwenwei on 17/9/13.
 */
var webpack = require('webpack');
var path = require('path');
var plugins = require("../plugins");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: './',
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:5].js',
    }
}

module.exports = config;