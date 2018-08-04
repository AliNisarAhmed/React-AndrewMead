// entry point and output file must be specified

const path = require("path");

module.exports = {
  entry: "./src/playground/hoc.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader:'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true
  }
};

// loader - enables to customize a file before loading

// use - for multiple loaders

//historyApiFallback: true - tells webpack that routing will be handled via client side routing and for webpack to return index.html everytime