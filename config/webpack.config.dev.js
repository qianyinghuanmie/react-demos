const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'cheap-source-map',
    watch: true,
    devServer: {
      port: 8888,
      contentBase: path.join(__dirname, '../dist'),
      compress: true,
      publicPath: `/dist/`,
      index: 'index.html',
      // 使用热模块更新，必须安装插件
      hot: true,
      // 自动在启动后打开浏览器
      open: false,
      // openPage: 'dist/',
      proxy: {
        '/api': {
          target: 'https://www.apiopen.top/',
          pathRewrite: {'^/api' : ''},
          changeOrigin: true,     // target是域名的话，需要这个参数，
          secure: false,          // 设置支持https协议的代理
        },
        '/api2': {
          target: 'https://api.apiopen.top/registerUser',
          pathRewrite: {'^/api' : ''},
          changeOrigin: true,     // target是域名的话，需要这个参数，
          secure: false,          // 设置支持https协议的代理
        }
      }
    },
    watchOptions: {
      // 不监听这些文件
      ignored: /node_modules/
    },
    devtool: 'source-map'
});
