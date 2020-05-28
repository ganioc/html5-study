var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: {
    app: path.join(__dirname, 'src', 'index2.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist2')

  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "compress html"
    })
  ],
  devServer: {
    publicPath: path.join(__dirname, 'dist2'),
    contentBase: path.join(__dirname, "dist2"),
    port: 8002,
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