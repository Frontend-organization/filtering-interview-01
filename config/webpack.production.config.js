const { DefinePlugin } = require('webpack')

/** @type {import('webpack').Configuration} */
module.exports = {
  plugins: [
    new DefinePlugin({
      //map your environment variables here
      //sample: "process.env.API_KEY": JSON.stringify(process.env.API_KEY)
    })
  ]
}
