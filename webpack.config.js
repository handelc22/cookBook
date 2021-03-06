const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/components/App.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './client/bundle'),
    filename: 'bundle.js',
  },
};