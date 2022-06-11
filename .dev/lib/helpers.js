/**
 * Init helpers
 */

const filename = (file) => {
	const [name] = file.split('.');
	return name;
}


/**
 * Exportando
 */

module.exports = {
	filename
};
