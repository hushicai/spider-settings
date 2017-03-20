const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: ['./src/index.js'],
  output: {
    path: './build',
    filename: 'settings.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
