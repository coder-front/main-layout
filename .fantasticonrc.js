const { join } = require('path');

module.exports = {
	
	name: 'ci-icons',

	inputDir: join(__dirname, './src/icons'),
	outputDir: join(__dirname, './src/assets/fonts/icons'),
	
	fontTypes: ['woff', 'woff2', 'ttf'],
	assetTypes: ['css'],

	normalize: true,
	descent: 50,

	prefix: 'ci',
	tag: 'i',

	formatOptions: {
		json: {
			indent: 2,
		},
	},
	
	codepoints: {
		'code-labs': 57344,
		// 'new-icon': 57345,
		// 'new-icons...': 5734...,
	},

}
