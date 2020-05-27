var webpack = require('webpack')
var path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'src', 'index.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')

  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    publicPath: path.join(__dirname, 'dist'),
    contentBase: path.join(__dirname, "dist"),
    port: 8000,
    historyApiFallback: {
      rewrites: [
        { from: /./, to: '/404.html' }
      ]
    },
    overlay: true,
    hot: true,
    open: true,
    watchOptions: {
      poll: true
    },
    inline: true
  }
}