const path = require("path");
const webpack = require("webpack");

const WebpackUserScript = require("webpack-userscript");
const CopyPlugin = require("copy-webpack-plugin");

const packageJson = require("./package");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "mtdeck4ios.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: [/node_modules/],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new WebpackUserScript({
      headers: (data) => {
        return {
          name: "MTDeck4iOS",
          match: "https://tweetdeck.twitter.com",
        };
      },
      metajs: false,
    }),
    new CopyPlugin([
      {
        from: "./src/manifest.json",
        transform: (buffer) => {
          const manifest = JSON.parse(buffer.toString());
          manifest.version = packageJson.version;
          manifest.developer = {
            name: packageJson.author,
            url: packageJson.homepage,
          };
          return JSON.stringify(manifest, null, 2);
        },
      },
      {
        from: "./src/_locales",
        to: "_locales",
      },
    ]),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    inline: false,
    host: "0.0.0.0",
    disableHostCheck: true,
  },
};
