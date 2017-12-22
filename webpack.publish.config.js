
var path = require('path')

var webpack = require('webpack')

const ExtractTextPlugin = require("extract-text-webpack-plugin");

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry:path.resolve(__dirname,'./src/js/app.js'),

    entry: {
        app: path.resolve(__dirname, 'src/js/app.js'),
        // 分离第三方应用
        vendors: ['react', 'react-dom']
    },

    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    // 加载器
    module:{
        rules:[
            // babel-loader,转化es6和jsx语法的加载器
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['es2015', 'react', 'stage-0', 'stage-1', 'stage-2']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader"
                })
            },
            // sass-loader
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            // 加载图片
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'url-loader?limit=25000&name=images/[name].[ext]'
            },
        ]
    },
    // 插件的内容
    plugins:[
        // 分离第三方插件
        new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.js'}),
        // 压缩插件
        // new webpack.optimize.UglifyJsPlugin({
        //    beautify: false,
        //    mangle: {
        //        screw_ie8: true,
        //        keep_fnames: true
        //    },
        //    compress: {
        //        warnings: false,
        //        screw_ie8: true
        //    },
        //    comments: false
        // }),
        // 提取css的插件
        new ExtractTextPlugin("app.css"),
        // 生成index.html页面
        new HtmlWebpackPlugin({
            template: './src/template.html',
            htmlWebpackPlugin: {
                "files": {
                    "css":["app.css"],
                    "js": ["bundle.js","vendors.js"]
                }
            },
            // 压缩,情怀至上
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
    ]
}

