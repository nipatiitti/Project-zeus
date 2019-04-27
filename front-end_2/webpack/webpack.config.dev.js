/**
 * Webpack config for building front-end in development
 *
 *
 */

const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = require('./webpack.config.base')({
    mode: 'development',
    entry: path.join(process.cwd(), 'src/index.jsx'),
    // Don't use hashes in dev mode for better performance
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devtool: 'eval-source-map',
    devServer: {
        stats: {
            colors: true,
            hash: false,
            version: false,
            timings: true,
            assets: false,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: true,
            errors: true,
            errorDetails: false,
            warnings: false,
            publicPath: false
        },
        // server default port
        port: 3001,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            inject: true,
            template: 'public/index.html',
            filename: 'index.html'
        })
    ]
})
