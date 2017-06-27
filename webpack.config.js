var webpack = require("webpack");
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // Here is where we tell webpack where everything is:
  entry: "./src/client/",
  output: {
    path: "dist/assets",
    filename: "ote.js",
    publicPath: "assets"
  },
  // Here is our dev server:
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  plugins: [
    new ExtractTextPlugin('index.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
    // ,
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false
    //   }
    // })
  ],
  module: {
    loaders : [
      {
        test: /\.js$/,
        exclude: [/(node_modules)/,/(legacy)/],
        loader: ["babel-loader"],
        query: {
          presets: ["latest", "stage-0", "react"]
        }
      },
      {
				test: /\.json$/,
				exclude: [/(node_modules)/,/(api)/],
				loader: "json-loader"
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			}
    ]
  }
}
