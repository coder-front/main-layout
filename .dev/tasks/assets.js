/**
 * Módulos de gulp
 */

const { dest, src } = require('gulp');


/**
 * Módulos locales
 */

const { config, folding, mode } = require('../lib');


/**
 * Helpers
 */

const getIgnoreScripts = () => {

	let files = config.scripts.entry.map(file => file.source);
	return files.map(file => `!${folding.assets.src}/js/${file}`);

}

const getIgnoreStyles = () => {

	let files = config.styles.entry;
	return files.map(file => `!${folding.assets.src}/css/${file}`);
	
}


/**
 * Inicializar tarea
 */

const assets = (cb) => {

	let files = [
		`${folding.assets.src}/**/*`,
		`!${folding.assets.src}/**/*.gitkeep`,
		...getIgnoreScripts(),
		...getIgnoreStyles()
	];

	if (mode.build()) {
		
		return src(files, { allowEmpty: true })

			/**
			 * Guardar archivo 
			 */

			.pipe(dest(folding.assets.dest));
	
	} else {

		cb();
		
	}

}


/**
 * Exportando
 */
module.exports = assets;
