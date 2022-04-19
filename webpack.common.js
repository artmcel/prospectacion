const HtmlWebPackPlugin       = require('html-webpack-plugin'); 
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
//const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    devServer : {
        port:8080
    },
    entry : {

        index: './src/index.js',
        registro : './src/js/registro.js',
        logo : './src/js/logo.js'

    },
    optimization: {
        minimize : true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                extractComments : "all"
            })
        ],
        splitChunks : {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false 
                        }
                    }
                ]
            },
            {
                test : /\.(png|svg|jpe?g|gif|ico)$/,
                type : 'asset/resource',
                generator : {
                    filename : 'assets/img/[name][ext]'
                }

            }
            
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            chunks : ['index', 'logo']
        }),
        new HtmlWebPackPlugin({
            template: './src/registro.html',
            filename: './registro.html',
            chunks : ['registro', 'logo']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false
        })
    ],
    output: {
        filename: '[name].[contenthash].js',
        clean : true
    }   

}