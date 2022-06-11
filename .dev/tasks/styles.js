/**
 * Módulos de gulp
 */

const { src, dest } = require('gulp');
const { basename } = require('path');


/**
 * Módulos de la tarea
 */

const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const foreach = require('gulp-foreach');
const sourcemaps = require('gulp-sourcemaps');
const headerComment = require('gulp-header-comment');


/**
 * Módulos de post-css
 */

const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const postcssFunctions = require('postcss-functions');
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');


/**
 * Módulos locales
 */

const { folding, mode, config } = require('../lib');


/**
 * Helpers
 */

const getStyleFiles = () => {
	return config.styles.entry.map(file => {
		return `${folding.styles.src}/${file}`;
	});
}

const setAsset = (link) => {
	link = link.replace(/['"]+/g, '');
	return `url(../${link})`;
}


/**
 * Inicializar tarea
 */

let postCssConfig = [
	postcssImport(),
	postcssFunctions({ functions: { asset: setAsset } }),
	tailwindcss(),
	autoprefixer(),
];

if (mode.build()) postCssConfig = [...postCssConfig, cssnano()];

const styles = () => {

	const files = getStyleFiles();

	return src(files, { allowEmpty: true })
		
		/**
		 * Iniciar .map
		 */

		.pipe(mode.dev(sourcemaps.init()))
		
		/**
		 * Aplicar postcss
		 */
		.pipe(postcss(postCssConfig))
		
		/**
		 * Escribir .map
		 */

		.pipe(mode.dev(sourcemaps.write('.')))
		
		/**
		 * Cambiar extensión cuando está minifcado
		 */

		.pipe(mode.build(rename({ extname: '.min.css' })))

		/**
		 * Añadir header a archivo minificado
		 */

		.pipe(mode.build(foreach((stream, file) => {
			return stream.pipe(headerComment(`
				${basename(file.path)} - ${config.views.title}
				Generated on ${ config.date.format('MMMM Do YYYY, h:mm:ss a') }

				Use tailwindcss (https://tailwindcss.com/)

				Copyright (c) <%= moment().format('YYYY') %> Code Labs
			`));
		})))

		/**
		 * Guardar archivo compilado
		 */

		.pipe(dest(folding.styles.dest));

}


/**
 * Exportando
 */
module.exports = styles;
