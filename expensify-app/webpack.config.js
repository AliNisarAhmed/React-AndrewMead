// entry point and output file must be specified

const path = require("path");

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

// instead of an object, we export a function from this file, this is because this function comes with the env argument

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: "./src/app.js",
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
          MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }]
    },
    plugins: [
      new MiniCSSExtractPlugin({
        filename: 'styles.css'
      })
    ],
    mode: 'development',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true
    }
  };
}

// module.exports = {
//   entry: "./src/app.js",
//   output: {
//     path: path.join(__dirname, "public"),
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [{
//       loader:'babel-loader',
//       test: /\.js$/,
//       exclude: /node_modules/
//     }, {
//       test: /\.s?css$/,
//       use: [
//         'style-loader',
//         'css-loader',
//         'sass-loader'
//       ]
//     }]
//   },
//   mode: 'development',
//   devtool: 'cheap-module-eval-source-map',
//   devServer: {
//     contentBase: path.join(__dirname, "public"),
//     historyApiFallback: true
//   }
// };

// loader - enables to customize a file before loading

// use - for multiple loaders

//historyApiFallback: true - tells webpack that routing will be handled via client side routing and for webpack to return index.html everytime