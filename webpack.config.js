const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacePlgun = require('webpack/lib/HotModuleReplacementPlugin');
module.exports = {
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src/index.jsx')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'js/[name].js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            include: path.resolve(__dirname, 'src'),
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['react-hot-loader/babel'],
              }
            }
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
          },
          {
            test: /\.scss$/,
            exclude: /(node_modules|bower_components)/,
            use:[
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
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')], // extensions:['jsx','js','json'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'], // 可以省略的后缀名
    },
};
