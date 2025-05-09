const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProd ? "production" : "development",
  optimization: {
    minimize: isProd,
    splitChunks: {
      chunks: "all",
      minSize: 10000,
      maxSize: 250000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
    hints: isProd ? "warning" : false,
  },
  entry: "./src/renderer/index.tsx",
  target: "web",
  devtool: "source-map",
  devServer: {
    static: path.join(__dirname, "dist/renderer"),
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
    devMiddleware: {
      publicPath: "/",
      writeToDisk: true,
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    path: path.resolve(__dirname, "dist/renderer"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      path: false,
      os: false,
      crypto: false,
      stream: false,
      http: false,
      https: false,
      zlib: false,
      assert: false,
      url: false,
      net: false,
      tls: false,
      child_process: false,
      fs: false,
      util: false,
    },
  },
};
