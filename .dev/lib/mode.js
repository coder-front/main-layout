/**
 * Módulos de node
 */

const gulpMode = require('gulp-mode');


/**
 * Inicializar mode
 */

const mode = gulpMode({
	modes: ['build', 'dev'],
	default: 'build',
	verbose: false,
});


/**
 * Exportando
 */

module.exports = mode;
