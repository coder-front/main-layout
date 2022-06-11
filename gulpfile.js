'use strict';


/**
 * Módulos de node
 */

const rimraf = require('rimraf');
const path = require('path');


/**
 * Módulos de gulp
 */

const { series, parallel } = require('gulp');


/**
 * Todas las tareas
 */

const { cleaner, scripts, views, styles, watcher, assets } = require('./.dev');


/**
 * Start Build
 */

exports.build = series(
	cleaner,
	parallel(
		scripts,
		views,
		styles,
		assets
	)
);


/**
 * Start Development
 */

exports.default = series(
	cleaner,
	parallel(
		scripts,
		views,
		styles,
		assets
	),
	watcher
);


/**
 * On process exit
 */

process.on('exit', () => {
	rimraf.sync(path.join(__dirname, './.tmp'));
});
