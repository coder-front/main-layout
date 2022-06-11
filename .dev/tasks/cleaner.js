/**
 * Módulos de node
 */

const del = require('del');


/**
 * Módulos locales
 */

const { folding, mode } = require('../lib');


/**
 * Inicializar tarea
 */

const cleaner = () => {

	return (mode.build())
		? del([folding.dest, folding.tmp], { force: true })
		: del([folding.dest], { force: true });
	
}


/**
 * Exportando
 */

module.exports = cleaner;
