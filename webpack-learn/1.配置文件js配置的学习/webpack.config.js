module.exports = {
    entry: './src/main.js', // 指定打包的入口文件
    output: {
        path: __dirname + '/dist',
        filename: 'build.js'
    }
}