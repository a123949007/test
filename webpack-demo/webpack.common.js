
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
  	app:'./src/index.js',
  },
  devtool:'inline-source-map',
  plugins:[
  	new HtmlWebpackPlugin({
      title:"Caching"
    }),
  	new CleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin({
      name:'common'
    }),
    new ExtractTextWebpackPlugin("styles.css")
  ],
  module:{
  	rules:[
  		{
  			test:/\.css$/,
  			use:ExtractTextWebpackPlugin.extract({
          fallback:"style-loader",
          use:"css-loader"
        })
  		}
  	]
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename:'[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  }
};
