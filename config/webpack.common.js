const HTMLWebPackPlugin = require('html-webpack-plugin');

const path = require("path");

/**@type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.js",
  // entry: [path.src + 'index.js'],
  output:  {
    // filename: "build.js",
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
    publicPath: "",
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /\.(css|scss|sass)$/,
      },
      {
        type: "asset/resource",
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
      },
      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ]
  },
  plugins: [
    new HTMLWebPackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
  ],
  // mode: "development",
}