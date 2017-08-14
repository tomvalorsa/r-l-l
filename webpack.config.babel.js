import webpack from 'webpack'
import path from 'path'
import extract from 'extract-text-webpack-plugin'
import copy from 'copy-webpack-plugin'
import autoprefixer from 'autoprefixer'

export default {
  entry: ['babel-polyfill', path.join(__dirname, './src/index.js')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: extract.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path][name]---[local]---[hash:base64:5]'
              }
            },
            {
              loader: 'sass-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer()
                ]
              }
            }
          ]
        }),
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        loader: 'file-loader?name=[hash].[ext]'
      },
      {
        test: /\.ico$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules']
  },
  plugins: [
    new extract('index.css'),
    new copy([
      { from: './src/index.html' }
    ])
  ]
}
