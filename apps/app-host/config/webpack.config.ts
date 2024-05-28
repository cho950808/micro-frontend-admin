import { resolve } from "path";
import { Configuration, DefinePlugin, container } from "webpack";
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const extensions = [".js", ".jsx", ".ts", ".tsx"];
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
import { dependencies } from "../package.json";


const getRemoteEntry = (appName: string, port?: number) => {
  return `http://localhost:${port}/remoteEntry.js`;
};

const config: Configuration = {
  entry: resolve(__dirname, "../main.ts"),
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|webp)$/,
        type: "asset/resource",
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          babelrcRoots: [".", "../../../*"],
        },
      },
    ],
  },
  resolve: {
    extensions,
    plugins: [
      new TsconfigPathsPlugin({
        extensions,
      }),
    ],
  },
  plugins: [
    new DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    new container.ModuleFederationPlugin({
      name: "appHost",
      remotes: {
        appDetail: `appDetail@${getRemoteEntry("app-detail", 30001)}`,
        appFeed: `appFeed@${getRemoteEntry("app-feed", 30002)}`,
      },
      shared: {
        ...dependencies,
        react: { singleton: true, requiredVersion: dependencies["react"] },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
    new VanillaExtractPlugin(),
  ],
};

export default config;
