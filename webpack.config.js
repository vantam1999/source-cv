const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),      
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(scss|css)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }, 
            {
                test: /\.html$/i,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/i,
                use: {
                    loader: 'file-loader',                   
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images/',                                 
                    }
                }
            },                        
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
};
module.exports = config;