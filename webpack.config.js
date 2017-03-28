const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractCSS = new ExtractTextPlugin('[name].bundle.css');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      // extractCSS
      // {
      //   test: /\.scss$/,
      //   loader: extractCSS.extract(['css-loader', 'sass-loader'])
      // },
      // // url loader
      // {
      //   test: /\.(png|jpg|otf|ttf)$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000
      //     } // Convert images < 10k to base64 strings
      //   }]
      // },
      // babel-loader
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this nessessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     Vue: 'vue',
  //   })
  // ],
  resolve: {
    modules: [
      '../node_modules'
    ]
  }
};