"use strict";
var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  // Set debugging source maps to be "inline" for
  // simplicity and ease of use
  mode: "development",
  devtool: "inline-source-map",

  // The application entry point
  entry: path.resolve(__dirname, "src", "index.tsx"),

  // Where to compile the bundle
  // By default the output directory is `dist`
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js"
  },
  // plugins: [new HtmlWebpackPlugin()],

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9001
  },

  // Supported file loaders
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  // $ means it must be .tsx
  // File extensions to support resolving
  resolve: {
    extensions: [".ts", ".tsx", ".js", "json"]
  }
};
