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
        jquery:path.resolve(__dirname, './node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js'),
        app:path.resolve(__dirname, './app/app.js'),
        styles:plugins.css,
        vendor_js:plugins.js,
    },
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, 'assets/static'),
        publicPath: './',
        filename: '[name].js',
        //chunkFilename: '[name].[chunkhash:5].js',
        chunkFilename: '[name].js',
    },
    module: {
        //加载器配置
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'app'),
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-runtime',['import', [{ libraryName: 'antd', style: "css" }]]],
                    presets:['es2015','react','stage-3']
                }
            },
            {
                test: /\.css$/,
                exclude: path.join(__dirname,'node_modules/antd'),
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.css$/,
                //exclude: path.join(__dirname,'node_modules'),
                include:path.join(__dirname,'node_modules/antd'),
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
        //["import", { libraryName: "antd", style: "css" }], // `style: true` 会加载 less 文件
/*        new webpack.HotModuleReplacementPlugin(),*/
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body',
            filename: './index.html'
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({name:'vendor_js', filename:'vendor.js'}),
        new ExtractTextPlugin('styles.css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'  // 新的一行
        })
    ]
};