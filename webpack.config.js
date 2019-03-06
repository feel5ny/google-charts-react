module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "joy_linewalks.js"
  },
  devServer: {
    contentBase: "./dist",
    port: 3009
  }
};
