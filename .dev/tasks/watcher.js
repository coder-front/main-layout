/**
 * Módulos de gulp
 */

const { series, watch, parallel } = require('gulp');


/**
 * Módulos locales
 */

const { config, folding, connect } = require('../lib');


/**
 * Módulos de las tareas
 */

const scripts = require('./scripts');
const views = require('./views');
const styles = require('./styles');
const assets = require('./assets');
const reload = require('./reload');


/**
 * Inicializar tarea
 */

const watcher = async () => {

	/**
	 * Creando servidor de desarrollo
	 */

	connect.server({
		livereload: true,
		root: [folding.tmp, folding.assets.src],
		port: config.server.port
	})

	/**
	 * Escuchando cambios de los archivos
	 */

	watch(folding.scripts.watch, series(scripts, reload));
	watch(folding.views.watch, series(parallel(styles, views), reload));
	watch(folding.styles.watch, series(styles, reload));
	watch(folding.assets.watch, series(assets, reload));

}


/**
 * Exportando
 */

module.exports = watcher;
