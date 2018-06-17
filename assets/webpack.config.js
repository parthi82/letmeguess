const path = require('path');

module.exports = {
  entry: path.join(__dirname, './js/index.jsx'),
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '../priv/static/js/dist/'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
}