# Front Core Coder
Mesa de trabajo creada con la finalidad de construir maquetas o proyectos front-end en [Code Labs](https://www.code-labs.com/).

## Tabla de contenido
- [Herramientas principales](#herramientas-principales)
- [Instalación](#instalación)
- [Empezar](#empezar)
- [Building](#building)
- [Configuración](#configuración)
- [Estructura](#estructura)
- [Autores](#autores)
- [Licencia](#licencia)

## Herramientas Principales
| Nombre | Descripción | Versión |
| ------ | ----------- | ------- |
| [Gulp.js](https://gulpjs.com/) | Herramienta para automatizar tareas comunes en el desarrollo de una aplicación | 4.0.2 |
| [Postcss](https://postcss.org/) | Herramienta para transformar CSS con plugins de Javascript | 8.4.14 |
| [Tailwind](https://tailwindcss.com/) | Framework CSS de bajo nivel altamente personalizable | 3.0.24 |
| [Esbuild](https://esbuild.github.io/) | Veloz empaquetador de aplicaciones JS | 0.14.43 |
| [Nunjucks](https://mozilla.github.io/nunjucks/) | Poderoso motor de plantillas asincrónico | 3.2.3 |
| [Fantasticon](https://github.com/tancredi/fantasticon) | Generador de icon-font, fácil de usar y altamente configurable | 1.2.3 |

## Instalación

> Requiere [Node.js](https://nodejs.org/) v16.13.0 o superior.

```sh
npx degit dsaza/front-core-coder name-project
cd name-project
```

Instalar dependencias del proyecto.
```sh
cd name-project
npm install
```

## Empezar
```sh
cd name-project
npm run dev
```

## Building
```sh
cd name-project
npm run build
```

## Configuración

Abrir el archivo name-project/config.js

```js
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

};
```

## Estructura
```
name-project
├── .dev
|   ├── lib
|   ├── tasks
|   └── index.js
├── src
│   ├── app
│   ├── assets
|   ├── icons
|   ├── styles
|   └── views
├── .editorconfig
├── .fantasticonrc.js
├── .gitignore
├── config.js
├── gulpfile.js
├── package.json
├── README.md
└── tailwind.config.js
```

## Autores
* **Dayron Daza** - *dayron@code-labs.com*
* **Daniel Orjuela** - *daniel.orjuela@code-labs.com*
* **Sergio Vielma** - *sergio@code-labs.com*
* **Victor Alvarado** - *victor@code-labs.com*

## Licencia
El proyecto está disponible como código abierto para los desarrolladores de [Code Labs](https://www.code-labs.com/).
