'use strict'

const path = require("path");
const webpackBaseConf = require("./webpack.base.config");
const merge = require("webpack-merge");

module.exports = function(env){
    let _config = {
        devtool: "cheap-module-eval-source-map",
        devServer: {
            disableHostCheck : true,
            port : 8080,
            hot  : true,
            contentBase : path.resolve(__dirname, "../dist"),
            clientLogLevel : "none",
            proxy: {}
        },
        module: {
            rules: [{
                test: /\.(css|scss)$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }]
        }
    };

    return merge(webpackBaseConf(env),_config);
};