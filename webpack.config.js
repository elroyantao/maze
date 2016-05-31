var path = require('path'),
  webpack = require('webpack'),
  AssetsPlugin = require('assets-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

var DEBUG = !(process.env.NODE_ENV === 'production');
var env = {
  NODE_ENV: process.env.NODE_ENV
  // API_BASE_URL: process.env.API_BASE_URL
};

var config = {
  devtool: DEBUG? '#cheap-module-eval-source-map': false,
  entry: {
    app: './App/index',
    // vendor: ['react', 'react-dom', 'redux', 'react-redux']
  },
  resolve: {
    root: [path.join(__dirname, 'App')]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: DEBUG
      ? 'js/[name].js'
      : 'js/[name].min.js'
  },
  plugins: [new webpack.DefinePlugin({'process.env': JSON.stringify(env)})],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'react-hot', 'babel?presets[]=react&presets[]=es2015'
        ],
        exclude: /node_modules/,
        include: path.join(__dirname, 'App')
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?url=false!less-loader!!postcss-loader")
      }, {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png"
      }, {
        test: /\.jpg$/,
        loader: "url-loader?mimetype=image/jpg"
      }

    ]
  },
  postcss: [autoprefixer({browsers: ['last 2 versions']})]

};

if (DEBUG) {
  config.entry.dev = ['webpack-dev-server/client?http://localhost:4001', 'webpack/hot/only-dev-server'];

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filname: 'js/vendor.js'}),
    new ExtractTextPlugin("css/[name].css")
  ]);
  config.output.publicPath = 'http://localhost:4001/static/';
  config.module.loaders[0].loaders[1] += '&presets[]=react-hmre'
} else {
  config.plugins = config.plugins.concat([
    // new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filname: 'js/[name].min.js'}),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("css/[name].min.css"),
    new AssetsPlugin({
      path: path.join(__dirname, 'public')
    })
  ]);
}

module.exports = config;
