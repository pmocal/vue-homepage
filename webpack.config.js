const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	entry: './main.js',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.vue$/,
				use: [
					'vue-loader'
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]
};