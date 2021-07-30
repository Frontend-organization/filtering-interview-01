const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { ProgressPlugin } = require('webpack')

/** @type {import('webpack').Configuration} */
module.exports = (env) => ({
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[contenthash].js',
    assetModuleFilename: 'public/assets/[hash][ext]',
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
    alias: {
      '@services': path.resolve(__dirname, '../src/services'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@context': path.resolve(__dirname, '../src/context'),
      '@libs': path.resolve(__dirname, '../src/libs')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile:
            env === 'production' ? '../tsconfig.json' : '../tsconfig.dev.json'
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { modules: true }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|mp3|mp4|jpeg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 //4kb
          }
        }
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
        options: { native: false }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      favicon: path.join(__dirname, '../public/favicon.ico')
    }),
    new MiniCssExtractPlugin(),
    new ProgressPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../public/assets'),
          to: path.join(__dirname, '../build/public')
        }
      ]
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { optimizationLevel: 5 }],
          ['optipng', { optimizationLevel: 5 }],
          ['jpegtran', { optimizationLevel: 5 }],
          ['svgo', { optimizationLevel: 5 }]
        ]
      }
    })
  ],
  experiments: {
    asset: true
  }
})
