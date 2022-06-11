/**
 * Módulos locales
 */

const mode = require('./mode');
const config = require('./config');


/**
 * Inicializar folding
 */

const folding = {

	src: './src',
	dest: '',
	tmp: './.tmp',

	assets: {
		src: '',
		dest: '',
		watch: '',
	},

	scripts: {
		src: '',
		dest: '',
		files: '',
		watch: '',
	},

	styles: {
		src: '',
		dest: '',
		files: '',
		watch: '',
	},

	views: {
		src: '',
		dest: '',
		watch: '',
	},

};


/**
 * Destino global
 */

folding.dest = (mode.build()) ? config.build : folding.tmp;


/**
 * Assets
 */

folding.assets.src = `${folding.src}/assets`;
folding.assets.dest = `${folding.dest}/assets`;
folding.assets.watch = `${folding.src}/assets/**/*`;


/**
 * Scripts
 */

folding.scripts.src = `${folding.src}/app`;
folding.scripts.dest = (mode.build()) ? `${folding.dest}/assets/js` : `${folding.dest}/lib`;
folding.scripts.files = config.scripts.entry;
folding.scripts.watch = `${folding.src}/app/**/*.js`;


/**
 * Styles
 */

folding.styles.src = `${folding.src}/styles`;
folding.styles.dest = (mode.build()) ? `${folding.dest}/assets/css` : `${folding.dest}/lib`;
folding.styles.files = config.scripts.entry;
folding.styles.watch = [`${folding.src}/styles/**/*.css`, 'tailwind.config.js'];


/**
 * Views
 */

folding.views.src = `${folding.src}/views`;
folding.views.dest = folding.dest;
folding.views.watch = `${folding.src}/views/**/*.twig`;


/**
 * Exportando
 */

module.exports = folding;
