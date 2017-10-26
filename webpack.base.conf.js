/**
 * Created by luwenwei on 17/9/13.
 */
var webpack = require('webpack');
var path = require('path');
var plugins = require("./plugins");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var bootstrap = path.resolve(__dirname, './node_modules/bootstrap/dist/js/bootstrap.min.js');
var datePicker = path.resolve(__dirname,'./node_modules/antd/lib/date-picker/index.js');
var select = path.resolve(__dirname,'./node_modules/antd/lib/select/index.js');
var QueueAnim = path.resolve(__dirname,'./node_modules/rc-queue-anim/lib/index.js')
var config = {
    //入口文件输出配置
    entry: {
        app:path.resolve(__dirname, './app/main.js'),
        styles:plugins.css,
        jquery:path.resolve(__dirname, './node_modules/jquery/dist/jquery.min.js'),
        react:["react","react-dom","react-router","react-router-dom"],
        vendor:["moment","classnames","axios","rc-switch","react-alert",QueueAnim,bootstrap,datePicker,select],
    },
    module: {
        //加载器配置
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                //include: path.join(__dirname, './app'),
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-runtime',['import', [{ libraryName: 'antd', style: "css" }]]],
                    presets:['es2015','react','stage-0']
                }
            },
            {
                test: /\.css$/,
                exclude: [path.join(__dirname,'./node_modules/antd'),path.join(__dirname,'./app/styles')],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.css$/,
                include:[
                    path.join(__dirname,'./node_modules/antd'),
                    path.join(__dirname,'./app/styles'),
                ],
                loader : 'style-loader!css-loader',// 一定要有style-loader
            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=font/[name].[ext]'}
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            'commonMethods':__dirname+'/app/utils/commonMethods.js',
            'uploadFile':__dirname+'/app/packages/fileUpload/dist/js/upload-file.min.js'
        }
    },
    //插件项
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body',
            filename: './index.html'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        })
    ],

    node: {
        fs: 'empty'
    }
};

module.exports = config;