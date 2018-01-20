module.exports = {
    entry: './src/js/main.js', // 指定打包的入口文件
    output: {
        path: __dirname + '/dist',
        filename: 'build.js'
    },
    module: {
        loaders: [{
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
        }, {
            //npm install url-loader file-loader --save-dev
            // loader:'url-loader' 配置会将图片变成一个base64的字符串存储到build.js中，如果图片很大的话，会造成build.js也很大，
            // 加载速度也慢，所以可以在后面添加限制，如果图片大小<40k就将其转换为base64，否则就单独将图片存放到硬盘上，将路径打包到build.js中
            test: /\.(png|jpg|gif|ttf)$/,
            loader: 'url-loader?limit=40000'
        }]
    }
}