// const HtmlWebPackPlugin = require("html-webpack-plugin");
const dotenv =require('dotenv');
import webpack from 'webpack';
const path = require('path');

dotenv.config();
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        include: path.resolve(
          __dirname,
          './node_modules/react-alice-carousel/lib/alice-carousel.css'
        ),
        test: /\.(s[ac]ss|css)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, 'public/'),
    publicPath: 'http://localhost:3000/dist',
    historyApiFallback: true,
    port: process.env.PORT || 7000,
    hotOnly: true
  }
};