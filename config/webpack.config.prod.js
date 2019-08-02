const merge = require('webpack-merge');
const baseConfig = require('../webpack.config');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(baseConfig, {
    mode: 'production',
    optimization: {
        // splitChunks: {
        //     chunks: 'all',
        //     name: 'common',
        // },
        namedModules: false,
        namedChunks: false,
        nodeEnv: 'production',
        flagIncludedChunks: true,
        occurrenceOrder: true,
        sideEffects: true,
        usedExports: true,
        concatenateModules: true,
        noEmitOnErrors: true,
        checkWasmTypes: true,
        minimizer: [
            new UglifyJsPlugin({
                cache: false,
                parallel: true,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
});
