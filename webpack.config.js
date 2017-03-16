var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: {
		'index': './src/js/pages/home/index.js',
		'list': './src/js/pages/list/index.js',
	},
	output: {
		path: path.join(__dirname, '/build'),
		publicPath: 'http://localhost:8080/build/',
		filename: '[name].js'
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: [
						[
							'es2015', {
								'modules': false
							}
						],
						'react',
					]
				}
			}]
		}, {
			test: /\.s?css$/,
			loader: ExtractTextPlugin.extract({
				fallbackLoader: 'style-loader',
				loader: [{
					loader: 'css-loader'
				}, {
					loader: 'sass-loader',
					options: {
						sourceMap: true,
						modules: true,
					}
				}, {
					loader: 'postcss-loader',
					options: {
						plugins: () => [
							autoprefixer,
							precss
						]
					}
				}]
			})
		}, {
			test: /\.(png|gif|jpg|svg)$/,
			use: 'url-loader?limit=2048'
		}, {
			test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9]?$)/,
			loader: 'file-loader?name=res/[name].[ext]?[hash]'
		}]
	},
	plugins: [
		//new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin({
			filename: '[name].css',
			disable: false,
			allChunks: true
		})
	],
	devServer: {
		contentBase: './',
		hot: true,
		noInfo: false,
		historyApiFallback: true
	}
}
