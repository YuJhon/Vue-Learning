module.exports = {
    entry: './src/static/js/main.js', // 指定打包的入口文件
    output: {
        path: __dirname + '/dist',
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader' // 从右边向左边调用
        }]
    }
}