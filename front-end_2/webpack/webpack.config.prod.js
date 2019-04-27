/**
 * Webpack config for production
 *
 */

const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = require('./webpack.config.base')({
    mode: 'production',
    devtool: 'source-map',
    entry: path.join(process.cwd(), 'src/index.jsx'),

    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js'
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    warnings: false,
                    compress: {
                        comparisons: false
                    },
                    parse: {},
                    mangle: true,
                    output: {
                        comments: false,
                        ascii_only: true
                    }
                },
                parallel: true,
                cache: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        nodeEnv: 'production',
        sideEffects: true,
        concatenateModules: true,
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                },
                main: {
                    chunks: 'all',
                    minChunks: 2,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        },
        runtimeChunk: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        }),

        new CleanWebpackPlugin(['build'], { root: process.cwd() })
    ]
})
