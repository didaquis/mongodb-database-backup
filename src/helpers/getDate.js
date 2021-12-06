/* Home doc */
/**
 * @file getDate module
 * @see module:getDate
 */

/* Module doc */
/**
 * getDate module
 * @module getDate
 */


/**
 * It returns an string with the current date. Example: '2021-12-06'
 * @returns {string}
 */
export const getDate = () => {
	const now = new Date().toISOString();
	const date = now.split('T')[0];
	return date;
};
