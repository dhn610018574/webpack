var path = require('path')

var webpack = require('webpack')

module.exports = {
    entry: path.resolve(__dirname, './src/js/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // 加载器
    module: {
        rules: [
            // {
            //    test: /\.js$/,
            //    exclude: /node_modules/,
            //    use: [
            //        'babel-loader',
            //        'eslint-loader'
            //    ],
            //    query: {
            //        cacheDirectory: true
            //    }
            // },
            // {
            //    test: /\.vue$/,
            //    enforce: 'pre',  // ��babel-loader��Դ����б���ǰ����lint�ļ��
            //    include: /src/,  // src�ļ����µ��ļ���Ҫ��lint
            //    use: [{
            //        loader: 'eslint-loader',
            //        options: {
            //            formatter: require('eslint-friendly-formatter')   // �������󱨸��ʽ
            //        }
            //    }]
            //    // exclude: /node_modules/ ���Բ��ö�������ֶε�����ֵ��eslint���Զ�����node_modules��bower_
            // },



            // babel-loader,转化es6和jsx语法的加载器
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [['es2015', 'react']]
                    }
                }]
            },
            // 加载css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
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
            }
        ]
    },
    devtool: 'eval',
    devServer: {
        contentBase: __dirname + '/src',
        hot: true, // 是否启动热更新
        port: 8084, // 设置端口
        host: '10.194.11.67',
        open: true, // 是否自动打开浏览器
        historyApiFallback: true //是否支持地址栏直接输入地址显示页面
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}