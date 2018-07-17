// entry point and output file must be specified

const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: 'bundle.js'
  }
};