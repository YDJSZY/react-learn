/**
 * Created by luwenwei on 17/9/16.
 */
var webpack = require('webpack');
var path = require('path');
var plugins = require("./plugins");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var bootstrap = path.resolve(__dirname, './node_modules/bootstrap/dist/js/bootstrap.min.js');
var datePicker = path.resolve(__dirname,'./node_modules/antd/lib/date-picker/index.js');
var select = path.resolve(__dirname,'./node_modules/antd/lib/select/index.js');
var config = {
    //入口文件输出配置
    entry: {
        app:path.resolve(__dirname, './app/main.js'),
        styles:plugins.css,
        jquery:path.resolve(__dirname, './node_modules/jquery/dist/jquery.min.js'),
        react:["react","react-dom","react-router","react-router-dom"],
        vendor:["moment","classnames","axios","rc-switch","react-alert",bootstrap,datePicker,select],
    },
    module: {
        //加载器配置
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.join(__dirname, './app'),
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-runtime',['import', [{ libraryName: 'antd', style: "css" }]]],
                    presets:['es2015','react','stage-0']
                }
            },
            {
                test: /\.css$/,
                loader : 'style-loader!css-loader',// 一定要有style-loader
            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'}
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            'react/lib/ReactMount': 'react-dom/lib/ReactMount'
        }
    },
    //插件项
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body',
            filename: './index.html'
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        })
    ]
};

module.exports = config;