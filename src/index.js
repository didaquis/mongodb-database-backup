import { spawn } from 'child_process';
import dotenv from 'dotenv';
dotenv.config();

// eslint-disable-next-line no-magic-numbers
const timeout = 5 * 60 * 1000; // Five minutes

const mongoDNSseedlist = process.env.MONGO_DNS_SEEDLIST_CONNECTION || '';

if (!mongoDNSseedlist) {
	throw new Error('You must indicate the database connection data');
}

const now = new Date().toISOString();
const date = now.split('T')[0];

const backupChildProcess = spawn('mongodump', [
	`--uri=${mongoDNSseedlist}`,
	`--archive=./backups/${date}.gz`,
	'--gzip'], { timeout: timeout });

backupChildProcess.on('exit', (code, signal) => {
	if (code || signal) {
		// eslint-disable-next-line no-console
		console.error(`child process exited with code ${code} and signal ${signal}`);
		return;
	}

	// eslint-disable-next-line no-console
	console.log('The database has been successfully backed up');
});

backupChildProcess.on('error', (err) => {
	// eslint-disable-next-line no-console
	console.error('Failed on the child process', err);
});
