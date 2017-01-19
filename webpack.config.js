/**
 * Created by zwwill on 2017/1/16.
 */
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin'); // 删除文件

// var plugins = [];
var extractCSS = new ExtractTextPlugin('style.[hash:8].css',{ allChunks: true});
var cssLoader = extractCSS.extract("style-loader", "css-loader");
var mcssLoader = extractCSS.extract("style-loader", "css-loader!mcss-loader");

// plugins.push(extractCSS);

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var HTML_ROOT_PATH = path.resolve(SRC_PATH, "html");
var JS_ENTRY_PATH = path.resolve(SRC_PATH, "javascript");
var HTML_DIST_PATH = path.resolve(ROOT_PATH, 'pub');

module.exports = {


    entry: path.resolve(JS_ENTRY_PATH, "index.js"),

    output: {
        path: HTML_DIST_PATH,
        filename: 'index.[hash:8].js',
        chunkFilename: "index.[hash:8].[id].js",
        publicPath:"/"
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by NetEase URS'),
        new HtmlWebpackPlugin({
            title:"URS服务台",
            template: path.resolve(HTML_ROOT_PATH, "index.html"),
            filename:"index.html",
            inject: true,
            hash:false,
            favicon:path.resolve(ROOT_PATH, "favicon.ico")
        }),
        extractCSS,
        new CleanWebpackPlugin(['pub'], {
            root: ROOT_PATH,
            verbose: true,
            dry: false
        })
    ],
    module: {
        loaders: [
            { test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
                loaders: [
                    // 小于5KB的图片会自动转成dataUrl
                    'url?limit=5120&name=img/[name].[hash:8].[ext]',
                    'image?{bypassOnDebug:true, progressive:true,optimizationLevel:3,pngquant:{quality:"65-80",speed:4}}'
                ]
            },
            { test: /\.html$/, loader: 'html-withimg-loader'},
            // { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.css$/, loader: cssLoader},
            // { test: /\.mcss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!mcss-loader")}
            { test: /\.mcss$/, loader: mcssLoader}
        ],
        // 解决动态js url警告错误
        unknownContextRegExp: /$^/,
        unknownContextCritical: false,

        // require(expr)
        exprContextRegExp: /$^/,
        exprContextCritical: false,

        // require("prefix" + expr + "surfix")
        wrappedContextRegExp: /$^/,
        wrappedContextCritical: false,
    },
    resolve: {
        alias: {
            regularjs: '../../bower_components/regularjs/dist/regular',
            restate: '../javascript/restate',
            stateman: '../../bower_components/stateman/stateman'
        }
    }
}