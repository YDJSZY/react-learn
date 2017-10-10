/**
 * Created by luwenwei on 17/9/13.
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    output: {
        path: path.resolve(__dirname, '../dist/'),
        publicPath: './',
        filename: '[name].[chunkhash:5].js',
        chunkFilename: '[name].[chunkhash:5].js',
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({names: ['jquery','react','vendor', 'manifest'],filename:'[name].[chunkhash:5].js'}),
        new ExtractTextPlugin('[name].[chunkhash:5].css'),
        new webpack.optimize.UglifyJsPlugin({
            // Don't beautify output (enable for neater output)  
            beautify: false,
            // Eliminate comments  
            comments: false,
            compress: {
                dead_code:true,
                warnings: false,
                // Drop `console` statements  
                drop_console: true
            }
        })
    ]
}

module.exports = config;