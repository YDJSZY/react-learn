/**
 * Created by luwenwei on 17/2/5.
 */
var webpack = require('webpack');
var path = require('path');
var plugins = require("./plugins");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    //页面入口文件配置
    entry: {
        //fetch:whatwgFetch,
        app:path.resolve(__dirname, './app/app.js'),
        plugins_css:plugins.css,
        plugins_js:plugins.js,
    },
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, 'assets/static'),
        publicPath: 'assets/static/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
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
            {test: /\.css$/, loaders: ["style-loader","css-loader"]},
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=../../[path][name].[ext]'}
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['','.js', '.json'],
        alias: {
            'react/lib/ReactMount': 'react-dom/lib/ReactMount'
        }
    },
    //插件项
    plugins: [
/*        new webpack.HotModuleReplacementPlugin(),*/
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('plugins_js', 'plugins_js.js'),
        new ExtractTextPlugin('plugins_css','plugins_css.css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'  // 新的一行
        })
    ]
};