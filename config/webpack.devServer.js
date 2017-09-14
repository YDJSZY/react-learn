/**
 * Created by luwenwei on 17/9/14.
 */
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var config = {
    output:{
        path: path.resolve(__dirname, '../server/'),
        publicPath: 'http://127.0.0.1:8080/server/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true,//报错无法识别，删除后也能正常刷新
    },
    plugins:[
        /*new webpack.DefinePlugin({
            'process.env.NODE.ENV':"development"
        }),*/
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({names: ['vendor', 'manifest']}),
        new ExtractTextPlugin('styles.css')
    ]
};

module.exports = config;