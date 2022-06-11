module.exports = {

	/**
	 * 1. Destino donde se empaqueta el sitio estático
	 */
	build: './build',

	/**
	 * 2. Opciones del servidor de desarrollo
	 */
	server: {
		port: 4000,
	},

	/**
	 * 3. Generar hash en el nombre del archivo para ignorar caché
	 */
	bustcache: false,

	/**
	 * 4. Archivos .js a compilar
	 */
	scripts: {

		/**
		 * 4.1. Si se desea ponerle nombre al módulo compilado, añadir la propiedad 'module'
		 */
		entry: [
			{ source: 'main.js', module: '$cl' },
			/**
			{ source: 'index.js' },
			{ source: 'index-2.js', module: 'myModuleName' },
			*/
		],

		/**
		 * 4.3. Versiones soportadas para el .js compilado
		 */
		targets: ['es2020', 'chrome58', 'firefox57', 'safari11']

	},

	/**
	 * 5. Archivos .css a compilar
	 */
	styles: {

		entry: [
			'main.css',
		],

	},

	/**
	 * 6. Opciones de las vistas
	 */
	views: {

		title: 'Front Core Coder',

		/**
		 * 6.1. Data que recibe todas las vistas
		 */
		data: {
			/**
			metatags: {
				description: 'Lorem ipsum dolor.',
			}, 
			*/
		}

	},

}
