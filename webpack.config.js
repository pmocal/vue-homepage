const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'homepage'
		}),
		new webpack.ProgressPlugin(),
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{
			test: /\.vue$/,
			loader: 'vue-loader'
			},
			{
			test: /\.(js|jsx)$/,
			use: 'babel-loader'
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	}
};