const { merge } = require('webpack-merge')
const defaultConfig = require('./config/webpack.default.config')
const productionConfig = require('./config/webpack.production.config')
const devConfig = require('./config/webpack.dev.config')

/** @type {import('webpack').Configuration} */
module.exports = (env = 'production') => {
  const isProd = env === 'production'
  if (isProd) return merge(defaultConfig(env), productionConfig, { mode: 'production' })
  return merge(defaultConfig(env), devConfig, { mode: 'development' })
}
