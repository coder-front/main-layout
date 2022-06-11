/**
 * Módulos de gulp
 */

const { dest, src } = require('gulp');
const { basename } = require('path');


/**
 * Módulos de la tarea
 */

const foreach = require('gulp-foreach');
const rename = require('gulp-rename');
const headerComment = require('gulp-header-comment');
const terser = require('gulp-terser');
const { createGulpEsbuild } = require('gulp-esbuild');


/**
 * Módulos locales
 */

const { config, folding, mode } = require('../lib');


/**
 * Inicializar tarea
 */

const esbuild = createGulpEsbuild({ pipe: true });

const esbuildConfig = {

	bundle: true,
	minify: false,
	sourcemap: (mode.build()) ? false : true,
	color: true,
	logLevel: (mode.build()) ? 'warning' : 'error',
	target: config.scripts.targets,

	define: {
		'$path_assets': '\"..\"',
		'$path_assets_html': (mode.build()) ? '\"./assets\"' : '\"./\"',
		'$is_dev': mode.dev(),
		'$is_build': mode.build(),
	},

};

const scripts = () => {

	const files = folding.scripts.files.map(file => `${folding.scripts.src}/${file.source}`);
	
	const getModuleName = (filename) => {
		const [entry] = folding.scripts.files.filter(file => file.source === filename);
		return entry;
	}

	return src(files, { allowEmpty: true })
		
		/**
		 * Definir nombre del módulo si existe
		 */

		.pipe(foreach((stream, file) => {
			const entry = getModuleName(basename(file.path));
			if (entry.hasOwnProperty('module')) esbuildConfig.globalName = entry.module;
			return stream.pipe(esbuild(esbuildConfig));
		}))

		/**
		 * Minificar módulo
		 */

		.pipe(mode.build(terser()))
		
		/**
		 * Cambiar extensión cuando está minifcado
		 */

		.pipe(mode.build(rename({ extname: '.min.js' })))

		/**
		 * Añadir header a archivo minificado
		 */

		.pipe(mode.build(foreach((stream, file) => {
			return stream.pipe(headerComment(`
				${basename(file.path)} - ${config.views.title}
				Generated on ${ config.date.format('MMMM Do YYYY, h:mm:ss a') }

				Use esbuild (https://esbuild.github.io/)

				Copyright (c) <%= moment().format('YYYY') %> Code Labs
			`));
		})))

		/**
		 * Guardar archivo compilado
		 */

		.pipe(dest(folding.scripts.dest));

}


/**
 * Exportando
 */

module.exports = scripts;
