const { spawn } = require('child_process');
require('dotenv').config();

// eslint-disable-next-line no-magic-numbers
const timeout = 5 * 60 * 1000; // Five minutes

const mongoDNSseedlist = process.env.MONGO_DNS_SEEDLIST_CONNECTION || '';

if (!mongoDNSseedlist) {
	throw new Error('You must indicate the database connection data');
}

const now = new Date().toISOString();
const date = now.split('T')[0];

const backupProcess = spawn('mongodump', [
	`--uri=${mongoDNSseedlist}`,
	`--archive=./backups/${date}.gz`,
	'--gzip'], { timeout: timeout });

backupProcess.on('exit', (code, signal) => {
	if (code) {
		// eslint-disable-next-line no-console
		console.log('Backup process exited with code ', code);
	} else if (signal) {
		// eslint-disable-next-line no-console
		console.error('Backup process was killed with singal ', signal);
	} else {
		// eslint-disable-next-line no-console
		console.log('The database has been successfully backed up');
	}
});

backupProcess.stdout.on('data', (data) => {
	// eslint-disable-next-line no-console
	console.log(`stdout: ${data}`);
});

backupProcess.on('error', (err) => {
	// eslint-disable-next-line no-console
	console.error('Failed on the subprocess.', err);
});


/*
const { spawn } = require('child_process');
const controller = new AbortController();
const { signal } = controller;
const grep = spawn('grep', ['ssh'], { signal });
grep.on('error', (err) => {
  // This will be called with err being an AbortError if the controller aborts
});
controller.abort(); // Stops the child process
*/
