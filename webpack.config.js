/**
 * Created by luwenwei on 17/2/5.
 */
var webpack = require('webpack');
var path = require('path');
var plugins = require("./plugins");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    //页面入口文件配置
    entry: {
        //fetch:whatwgFetch,
        jquery:path.resolve(__dirname, './app/node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js'),
        app:path.resolve(__dirname, './app/app.js'),
        styles_css:plugins.css,
        vendor_js:plugins.js,
    },
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, 'assets/static'),
        publicPath: './',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        //加载器配置
        rules: [
            {
                test: /\.js?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'app')
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    plugins: ['transform-runtime'],
                    presets:['es2015','react','stage-3']
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
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
/*        new webpack.HotModuleReplacementPlugin(),*/
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body',
            filename: './index.html'
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({name:'vendor_js', filename:'vendor_js.js'}),
        new ExtractTextPlugin('styles.css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'  // 新的一行
        })
    ]
};