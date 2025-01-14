import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve } from "path";
import { Configuration } from "webpack";
import "webpack-dev-server";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.config";

const developmentConfig: Configuration = {
  mode: "development",
  output: {
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              "vue-style-loader",
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                  modules: {
                    localIdentName: "[local]--[hash:base64:5]",
                  },
                },
              },
              "sass-loader",
            ],
          },
          {
            use: [
              "vue-style-loader",
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                },
              },
              "sass-loader",
            ],
          },
        ],
      },
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    historyApiFallback: { index: "/index.html" },
    hot: true,
    host: "localhost",
    port: 30002,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "../public/index.html"),
    }),
  ],
};

export default merge(commonConfig, developmentConfig);
