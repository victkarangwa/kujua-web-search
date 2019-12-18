// const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path');
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src/index'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'public/'),
        publicPath: "http://localhost:9000/dist",
        historyApiFallback: true,
        port: 9000,
        hotOnly: true
    },
}