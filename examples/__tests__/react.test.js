const path = require('path');
const runJest = require('./__helpers__/run-jest');

describe('React', () => {
	it('should run successfully', () => {
		const react = path.resolve(__dirname, '../react');

		const result = runJest(react, ['--no-cache']);
		const stderr = result.stderr.toString();
		const output = result.output.toString();

		expect(result.status).toBe(1);
		expect(output).toContain('1 test failed, 1 test passed (2 total in 2 test suite');
		expect(stderr).toContain('PASS  source/__tests__/react-good.test.tsx');
		expect(stderr).toContain('FAIL  source/__tests__/react-bad.test.tsx');
		expect(stderr).toContain('React bad › bad button should throw an error on line 10');
		expect(stderr).toContain('stupid thrown');
	});
});