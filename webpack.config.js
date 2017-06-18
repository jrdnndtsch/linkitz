var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'js', 'main.js'),
  output: {
      path: buildPath,
      filename: "bundle.js", 
      publicPath: '/'
  },
  devServer: {
     historyApiFallback: true
  },
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015'], 
              plugins: ['transform-class-properties']
            }
          }, 
          {
            test: /\.sass$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
          }
      ]
  }
};