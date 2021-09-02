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
      '@services': path.resolve(__dirname, '../src/services'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@context': path.resolve(__dirname, '../src/context'),
      '@libs': path.resolve(__dirname, '../src/libs')
    }
  },
  plugins: [
    new DotenvWebpackPlugin({
      path: path.resolve(__dirname, '../.env.development')
    })
  ]
};
