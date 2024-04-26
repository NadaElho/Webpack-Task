const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common')
const path = require('path')

module.exports = merge(commonConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
            MiniCssExtractPlugin.loader, 
            'css-loader', 
            'sass-loader'
        ],
      },
      {
        test: /\.(png|svg|gif|jpe?g)$/,
        use: 'image-webpack-loader',
        type: 'asset',
        generator: {
          filename: 'images/[name].[hash][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024,
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env']],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css'
    }),
  ]
})
