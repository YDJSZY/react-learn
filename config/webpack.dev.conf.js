/**
 * Created by luwenwei on 17/9/13.
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, '../assets/'),
        publicPath: './',
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            names: ['jquery','react','vendor','manifest']
        }),
        new ExtractTextPlugin('styles.css')
    ]
};

module.exports = config;