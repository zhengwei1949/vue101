var path=require("path");
var webpack=require("webpack");
var HtmlWebpackPlugin=require("html-webpack-plugin");

module.exports={
  devtool:"source-map",
  entry:["./src/main"],
  output:{
    path:path.join(__dirname,"dist"),
    filename:"bundle.js"
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin({
      compressor:{
        warnings:false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ],
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['style', 'css','sass']
    },{
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
}