const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // production
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html", // 生成后放到项目根目录
      template: "./src/index.html",
    }),
  ],
};
