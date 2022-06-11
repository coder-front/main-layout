/**
 * Módulo para fechas
 */

const moment = require('moment');


/**
 * Configuración hecha en /config.js
 */

const config = require('../../config');


/**
 * Exportando
 */

module.exports = {
	...config,
	date: moment(),
	hash: Date.now()
};
