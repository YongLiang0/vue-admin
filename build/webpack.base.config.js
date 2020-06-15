'use strict'

const path = require("path");
const utils = require('./utils');
const cleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const vueLoaderPlugin = require("vue-loader/lib/plugin");
const SRC_PATH = path.join(__dirname, '../src');

module.exports = function(env){
    let _config = { 
        entry: {
            app : ["babel-polyfill", path.join(SRC_PATH, 'app.js')]
        },
        externals : {
            'vue' : 'Vue',
            'vuex' : 'Vuex',
            'vue-router': 'VueRouter',
            'element-ui': 'ELEMENT',
            'babel-polyfill': 'window',
            'axios': 'axios',
        },
        output : {
            path : path.resolve(__dirname,"../dist"),
            filename : env.dev ? "js/[name].js" : "js/[name]-[contenthash:8].js",
            publicPath : '/'
        },
        module : {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: "babel-loader",
                        options : {
                            cacheDirectory : true
                        }
                    }]
                },
                {
                    test : /\.(jpg|jpeg|png|gif)$/,
                    use : [
                        {
                            loader : "url-loader",
                            options : {
                                limit : 8192,
                                name : env.dev ? "[name].[ext]" : "[name]-[contenthash:8].[ext]",
                                outputPath : "./images"
                            }
                        }
                    ]
                },
                {
                    test: /\.vue$/,
                    use: ["vue-loader"]
                },
                {
                    test: /\.pug$/,
                    loader: 'pug-plain-loader'
                },
                {
                    test: /\.(eot|woff|woff2|ttf|svg)/,
                    loader: "url-loader",
                    options: {
                        limit: 100,
                        name: './fonts/[name].[ext]'
                    }
                }
            ]
        },
        resolve : {
            extensions: [".js", ".vue", ".css", ".scss", ".json"],
            alias : {
                "@" : path.resolve(__dirname,"../src")
            }
        },
        plugins : [
            new cleanWebpackPlugin(),
            new vueLoaderPlugin(),
			new CopyWebpackPlugin([
                {
                    from: path.resolve(__dirname, '../static'),
                    to: 'static',
                    ignore: ['.*']
                }
            ]),
            utils.getHtmlWebpackPlugin(env)
        ],
        watchOptions: {
            ignored: [path.resolve("../node_modules")]
        },
        optimization : {
            splitChunks : {
                chunks : "all",
                cacheGroups : {
                    vendor : {
                        test : /node_modules/,
                        priority : 10,
                        name : "vendor",
                        minSize : 0
                    },
                }
            },
            runtimeChunk : {
                name : "runtimeChunk",
            }
        }
    };

    return _config;
};