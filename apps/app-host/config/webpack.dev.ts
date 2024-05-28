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
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.vanilla\.css$/i,
        use: [
          "style-loader",
          {
            loader: require.resolve("css-loader"),
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: { index: "/index.html" },
    hot: true,
    host: "localhost",
    port: 30000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "../public/index.html"),
    }),
  ],
};

export default merge(commonConfig, developmentConfig);
