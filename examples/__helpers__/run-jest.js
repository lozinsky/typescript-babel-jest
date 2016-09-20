// from: https://github.com/facebook/jest/blob/master/integration_tests/runJest.js

const { fileExists } = require('./utils');
const path = require('path');
const spawnSync = require('child_process').spawnSync;

const JEST_PATH = 'jest';

function runJest(dir, args) {
	const isRelative = dir[0] !== '/';

	if (isRelative) {
		dir = path.resolve(__dirname, dir);
	}

	const localPackageJson = path.resolve(dir, 'package.json');
	if (!fileExists(localPackageJson)) {
		throw new Error(`
			Make sure you have a local package.json file at
			"${localPackageJson}".
			Otherwise Jest will try to traverse the directory tree and find the
			the global package.json, which will send Jest into infinite loop.
		`);
	}

	const result = spawnSync(JEST_PATH, args || [], {
		cwd: dir,
	});

	result.stdout = result.stdout && result.stdout.toString();
	result.stderr = result.stderr && result.stderr.toString();

	return result;
}

runJest.json = function(dir, args) {
	args = Array.prototype.concat(args || [], '--json');
	const result = runJest(dir, args);
	try {
		result.json = JSON.parse((result.stdout || '').toString());
	} catch (e) {
		throw new Error(`
			Can't parse JSON.
			ERROR: ${e.name} ${e.message}
			STDOUT: ${result.stdout}
			STDERR: ${result.stderr}
		`);
	}

	return result;
};

module.exports = runJest;