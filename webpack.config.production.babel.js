import webpack from 'webpack'
import config from './webpack.config.babel'
import path from 'path'

// TODO: minify css

export default {
  ...config,
  plugins: [
    ...config.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ],
  devtool: 'cheap-module-source-map'
}