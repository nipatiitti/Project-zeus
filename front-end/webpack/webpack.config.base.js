/**
 * Common webpack configuration
 *
 *
 */

const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = options => ({
    mode: options.mode,
    entry: {
        polyfill: 'babel-polyfill',
        app: options.entry
    },
    output: Object.assign(
        {
            path: path.resolve(process.cwd(), 'build'),
            publicPath: '/'
        },
        options.output
    ),
    optimization: options.optimization,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: options.babelQuery
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    options.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            }
        ]
    },
    target: 'node',
    plugins: options.plugins.concat([
        // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
        // inside your code for any environment checks; Terser will automatically
        // drop any unreachable code.
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new Dotenv()
    ]),
    resolve: Object.assign(
        {
            alias: {
                actions: path.resolve(__dirname, '../src/actions'),
                reducers: path.resolve(__dirname, '../src/reducers'),
                assets: path.resolve(__dirname, '../src/assets'),
                constants: path.resolve(__dirname, '../src/constants.js')
            },
            extensions: ['.js', '.jsx']
        },
        options.resolve
    ),
    devtool: options.devtool,
    // control what bundle information gets displayed
    // https://webpack.js.org/configuration/stats/
    devServer: options.devServer,
    target: 'web', // Make web variables accessible to webpack, e.g. window
    performance: options.performance || {}
})
