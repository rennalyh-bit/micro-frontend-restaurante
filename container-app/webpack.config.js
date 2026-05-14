const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  entry: "./src/index.js",

  mode: "development",

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  output: {
    publicPath: "http://localhost:3000/",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "container",

      remotes: {
        microCardapio:
          "microCardapio@http://localhost:3001/remoteEntry.js",

        microPedido:
          "microPedido@http://localhost:3002/remoteEntry.js",
      },

      shared: {
        react: {
          singleton: true,
          requiredVersion: false,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: false,
        },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  resolve: {
    extensions: [".js"],
  },
};