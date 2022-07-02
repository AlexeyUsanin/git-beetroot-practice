const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  // mode: 'development',
  mode: 'production',
  output: {
    filename: 'main.js',
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Homepage | Webpack',
    template: './src/index.html',
    inject: 'body'
  })],
  devServer: {
    static: './dist',
  },

}