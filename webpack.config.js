const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: ['./src/index.js'],
  target: 'node',
  output: {
    path: './build',
    filename: 'settings.js',
    libraryTarget: "commonjs2"
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
