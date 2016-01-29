var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, 'src/js/app.js'),
    vendors: ['angular']
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'app.js',
    publicPath: 'dist/'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: ['es2015']
      }
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass!postcss-loader'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=1&name=img/[name].[ext]'
    }],
  },
  postcss: [autoprefixer({
    browsers: ['last 2 versions']
  })],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', 2),
    new webpack.DefinePlugin({
      __BASEURL__: JSON.stringify(process.env.BASEURL || '//localhost:8080')
    })
  ]
}
