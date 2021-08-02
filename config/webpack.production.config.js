const { DefinePlugin } = require('webpack')

/** @type {import('webpack').Configuration} */
module.exports = {
  plugins: [
    new DefinePlugin({
      //map your environment variables here
      "process.env.REACT_APP_DATA_ENDPOINT": JSON.stringify(process.env.REACT_APP_DATA_ENDPOINT)
    })
  ]
}
