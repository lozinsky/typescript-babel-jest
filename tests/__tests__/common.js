/* global describe, it, expect */

const runJest = require('../__helpers__/run-jest');

describe('Common', () => {
	it('Should run successfully', () => {
		const result = runJest('../common', ['--no-cache', '-u']);
		const stderr = result.stderr.toString();
		const output = result.output.toString();

		expect(result.status).toBe(0);
		expect(output).toContain('PASS  source/__tests__/creeping.ts');
		expect(stderr).toContain('✓ Async sleep');
		expect(stderr).toContain('1 test passed (1 total in 1 test suite');
	});
});