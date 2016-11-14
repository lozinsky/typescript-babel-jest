const appRoot = require('app-root-path');

const tsc = require('typescript');
const babelJest = require('babel-jest');

const tsConfig = require(appRoot + '/tsconfig.json');

module.exports = {
	process(src, path) {
		const isTypeScript = path.endsWith('.ts') || path.endsWith('.tsx');
		const isJavaScript = path.endsWith('.js') || path.endsWith('.jsx');

		if (isTypeScript) {
			src = tsc.transpile(
				src,
				tsConfig.compilerOptions,
				path,
				[]
			);
		}

		if (isJavaScript || isTypeScript) {
			src = babelJest.process(src, isJavaScript ? path : 'file.js');
		}

		return src;
	},
};
