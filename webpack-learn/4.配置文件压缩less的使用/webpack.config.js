module.exports = {
    entry: './src/js/main.js', // 指定打包的入口文件
    output: {
        path: __dirname + '/dist',
        filename: 'build.js'
    },
    module: {
        loaders: [{
            //npm i css-loader style-loader --save-dev
            test: /\.css$/,
            loader: 'style-loader!css-loader' // 从右边向左边调用
        }, {
            //cnpm install node-sass sass-loader css-loader style-loader --save-dev
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            //npm install less less-loader style-loader css-loader --save-dev
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }]
    }
}