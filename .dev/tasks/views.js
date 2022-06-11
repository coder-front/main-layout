/**
 * Módulos de gulp
 */

const { dest, src } = require('gulp');


/**
 * Módulos de la tarea
 */

const nunjucks = require('gulp-nunjucks-render');
const htmlbeautify = require('gulp-html-beautify');


/**
 * Módulos locales
 */

const { config, folding, mode, helpers } = require('../lib');


/**
 * Inicializar tarea
 */

const views = () => {

	const setPageTitle = (title = '') => {
		title = title.trim();
		if (title !== '') return `${title} | ${config.views.title}`;
		return config.views.title;
	}

	const hrefCacheBust = (path) => {
		return config.bustcache ? `${path}?t=${config.hash}` : path;
	}

	const manageEnvironment = (environment) => {

		let envData = {

			'$is_build': (mode.build()) ? true : false,
			'$is_dev': (mode.dev()) ? true : false,

			'asset': (dir) => (mode.build())
				? hrefCacheBust(`./assets/${dir}`)
				: `./${dir}`,
			
			'image': (dir) => (mode.build())
				? hrefCacheBust(`./assets/images/${dir}`)
				: `./images/${dir}`,
			
			'css': (filename) => (mode.build())
				? hrefCacheBust(`./assets/css/${helpers.filename(filename)}.min.css`)
				: `./lib/${helpers.filename(filename)}.css`,

			'js': (filename) => (mode.build())
				? hrefCacheBust(`./assets/js/${helpers.filename(filename)}.min.js`)
				: `./lib/${helpers.filename(filename)}.js`,
			
			'page': (filename) => `./${filename}.html`,
			'title': setPageTitle,

		};

		envData = {
			...config.views.data,
			...envData
		};

		for (const key in envData) {
			environment.addGlobal(key, envData[key])
		}

	}

	return src(`${folding.views.src}/pages/*.twig`, { allowEmpty: true })
		
		/**
		 * Compilar .twig a .html
		 */

		.pipe(nunjucks({
			path: [folding.views.src],
			ext: '.html',
			manageEnv: manageEnvironment
		}))
		
		/**
		 * Identar html compilado
		 */

		.pipe(htmlbeautify({
			indent_size: 2,
			indent_with_tabs: true,
			preserve_newlines: false,
			end_with_newline: true,
			eval_code: true,
			space_before_conditional: false,
		}))
		
		/**
		 * Guardar archivo compilado
		 */

		.pipe(dest(folding.views.dest));
	
}


/**
 * Exportando
 */

module.exports = views;
