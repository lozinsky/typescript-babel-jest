import path from 'path';
import runJest from './helpers/run-jest';

describe('React', () => {
    it('should run successfully', () => {
        const react = path.join(__dirname, './fixtures/react');

        process.env.APP_ROOT_PATH = react;

        const result = runJest(react, ['--no-cache']);
        const stderr = result.stderr.toString();
        const output = result.output.toString();

        expect(result.status).toBe(1);
        expect(output).toContain('● React bad › bad button should throw an error on line 10');
        expect(stderr).toContain('stupid thrown');
        expect(stderr).toContain('PASS  source/__tests__/react-good.test.tsx');
        expect(stderr).toContain('Test Suites: 1 failed, 1 passed, 2 total');
    });
});
