const DotenvWebpackPlugin = require('dotenv-webpack');
const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: ["react-hot-loader/patch", "./src/index"],
  devtool: "eval-source-map",
  devServer: {
    port: process.env.PORT || 8080,
    contentBase: path.join(__dirname, 'build'),
    open: true,
    host: '0.0.0.0',
    hot: true,
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    }
  },
  plugins: [
    new DotenvWebpackPlugin({
      path: path.resolve(__dirname, '../.env.development')
    })
  ]
};
