import { spawn } from 'child_process';
import dotenv from 'dotenv';
dotenv.config();
import { logger, endLogger } from './helpers/logger.js';
import { createBackup } from './createBackup.js';

const databaseURI = process.env.MONGO_URL || '';

createBackup(spawn, logger, databaseURI);

// Manage application shutdown
process.on('SIGINT', () => {
	logger.info('Stopping application...');
	endLogger();
	process.exit();
});
