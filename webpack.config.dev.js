console.log("dev");

const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HotModuleReplacePlgun = require('webpack/lib/HotModuleReplacementPlugin');


module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src/index.jsx')],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "common",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'js/[name].js'
  },
  module: {
    rules: [{
        test: /\.jsx|\.js$/,
        exclude: /(node_modules)/,
        include: path.resolve(__dirname, 'src'),
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss|\.sass$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(gif|png|jpg)$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "assets/img/[name].[ext]"
          }
        }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "assets/[name].[ext]"
          }
        }],
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html"
    }),
    // 设置热更新
    new HotModuleReplacePlgun(),
    new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    port: 8888,
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    publicPath: `/dist/`,
    index: 'index.html',
    // 使用热模块更新，必须安装插件
    hot: true,
    // 自动在启动后打开浏览器
    // open: true,
    openPage: 'dist/',
    proxy: {
      '/api': {
        target: 'https://api.apiopen.top',
        pathRewrite: {'^/api' : ''},
        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: false,          // 设置支持https协议的代理
      },
      '/api2': {
      }
    }
  },
  resolve: {
    // 配置寻找第三方库的时候的位置
    modules: [path.resolve(__dirname, 'node_modules')], // extensions:['jsx','js','json'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css']// 可以省略的后缀名
  },
  watchOptions: {
    // 不监听这些文件
    ignored: /node_modules/
  },
  devtool: 'source-map'
};
