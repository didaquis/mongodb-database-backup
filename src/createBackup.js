/* Home doc */
/**
 * @file createBackup module
 * @see module:createBackup
 */

/* Module doc */
/**
 * createBackup module
 * @module createBackup
 */


import { getDate } from './helpers/getDate.js';

/**
 * It create a backup file
 * @param {Object} spawn		- A module that provides the ability to generate subprocesses
 * @param {Object} logger 		- A library to log information
 * @param {string} databaseURI 	- DNS seed list connection format
 */
export const createBackup = (spawn, logger, databaseURI) => {
	if (!databaseURI) {
		logger.error('You must indicate the database connection data');
		return;
	}

	// eslint-disable-next-line no-magic-numbers
	const timeout = 2 * 60 * 1000; // Two minutes
	const date = getDate();

	const backupChildProcess = spawn('mongodump', [
		`--uri=${databaseURI}`,
		`--archive=./backups/${date}.gz`,
		'--gzip'], { timeout: timeout });

	backupChildProcess.on('exit', (code, signal) => {
		if (code || signal) {
			logger.error(`child process exited with code ${code} and signal ${signal}`);
			return;
		}

		logger.info('The database has been successfully backed up');
	});

	backupChildProcess.on('error', (err) => {
		logger.error('The child process does not spawn successfully', err);
	});
};
