import webpack from 'webpack'
import path from 'path'
import extract from 'extract-text-webpack-plugin'
import copy from 'copy-webpack-plugin'
import nested from 'postcss-nested'
import autoprefixer from 'autoprefixer'

export default {
  entry: path.join(__dirname, './src/index.js'),
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
        test: /\.css$/,
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
              loader: 'postcss-loader',
              options: {
                plugins: [
                  nested(),
                  autoprefixer()
                ]
              }
            }
          ]
        }),
        include: path.join(__dirname, 'src')
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
