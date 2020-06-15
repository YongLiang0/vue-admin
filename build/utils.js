'use strict'

const HtmlWebpackPlugin  =  require("html-webpack-plugin");

exports.getHtmlWebpackPlugin = function(env){
    return new HtmlWebpackPlugin({
        inject : true,
        filename : './index.html',
        template : './index.html',
        minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
        },
        externals: {
            js: [
                '//cdn.bootcdn.net/ajax/libs/babel-polyfill/7.10.1/polyfill.min.js',
                '//cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.min.js',
                '//cdn.bootcdn.net/ajax/libs/vuex/3.2.0/vuex.min.js',
                '//cdn.bootcdn.net/ajax/libs/vue-router/3.2.0/vue-router.min.js',
                '//cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js',
                '//cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/index.js',
                '//cdn.bootcdn.net/ajax/libs/moment.js/2.26.0/moment.min.js',
                '//cdn.bootcdn.net/ajax/libs/js-cookie/2.2.1/js.cookie.min.js'
            ],
            css: [
            ]
        }
    })
};
