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
        //peticiones : './src/js/services/peticiones.js'

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
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: './src/assets/img/[name].[ext]'
                        }
                    }
                ],
                type: 'javascript/auto'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            chunks : ['index']
        }),
        new HtmlWebPackPlugin({
            template: './src/registro.html',
            filename: './registro.html',
            chunks : ['registro']
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