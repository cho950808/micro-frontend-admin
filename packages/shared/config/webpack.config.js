const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const { theme } = require("../src/config/theme/themeVariables");

module.exports = (env = {}) => ({
  mode: "development",
  cache: false,
  devtool: "eval-source-map",
  optimization: {
    minimize: false,
  },
  entry: path.resolve(__dirname, "../src/main.js"),
  output: {
    filename: "[name].[contenthash].js",
    clean: false,
  },
  resolve: {
    extensions: [".vue", ".jsx", ".js", ".json", ".svg"],
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      // vue: path.resolve("./node_modules/vue"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.jsx$/,
        use: "babel-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|bmp|tiff)$/,
        exclude: /node_modules/,
        type: "asset",
        generator: {
          filename: "assets/images/[name]_[hash][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  ...theme,
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new ModuleFederationPlugin({
      name: "shared",
      filename: "remoteEntry.js",
      exposes: {
        "./style": "./src/assets/css/style.css",
        "./styled": "./src/assets/css/styled.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      BASE_URL: JSON.stringify("./"),
    }),
  ],
  devServer: {
    port: 10000,
    compress: true,
    historyApiFallback: { index: "/index.html" },
    hot: true,
  },
});
