/* Home doc */
/**
 * @file logger module
 * @see module:logger
 */

/* Module doc */
/**
 * logger module
 * @module logger
 */

import log4js from 'log4js';

/**
 * log4js configuration data
 */
log4js.configure({
	appenders: {
		out: { type: 'stdout' },
	},
	categories: {
		default: { appenders: ['out'], level: 'all' },
	}
});

/**
 * Logger object that provides the methods to logger data (all logs are printed in console)
 * @async
 * @example <caption>Usage of logger:</caption>
 *          logger.trace('trace');
 *          logger.debug('debug');
 *          logger.info('info');
 *          logger.warn('warn');
 *          logger.error('error');
 *          logger.fatal('fatal');
 */
export const logger = log4js.getLogger();

export const endLogger = log4js.shutdown;
