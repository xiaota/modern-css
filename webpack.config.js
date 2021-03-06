var webpack = require('webpack');
var path = require('path')

var DEV = path.resolve(__dirname,'dev')
var DIST = path.resolve(__dirname,'dist')

var config = {
	entry: DEV + 'index.jsx',
	output:{
		path: DIST,
		filename:'index.js'
	},
	module: {
		loaders:[{
			include: DEV,
			loader:'babel'
		}]
	}
}

module.exports = config;