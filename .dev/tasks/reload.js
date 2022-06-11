/**
 * Módulos de gulp
 */

const { src } = require('gulp');


/**
 * Módulos locales
 */

const { connect, folding } = require('../lib');


/**
 * Inicializar tarea
 */

const reload = () => {

	return src(`${folding.src}/**/*`)
		.pipe(connect.reload());

}


/**
 * Exportando
 */

module.exports = reload;
