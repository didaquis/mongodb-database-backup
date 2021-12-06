/* Home doc */
/**
 * @file Configuration settings for getDate module
 * @see module:getDate
 */

/* Module doc */
/**
 * Configuration settings for getDate module
 * @module getDate
 */


/**
 * It returns an string with the current date. Example: '2021-12-06'
 * @returns {String}
 */
export const getDate = () => {
	const now = new Date().toISOString();
	const date = now.split('T')[0];
	return date;
}
