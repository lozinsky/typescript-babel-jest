import appRoot from 'app-root-path';
import typescript from 'typescript';
import babelJest from 'babel-jest';

const tsConfig = require(`${appRoot.path}/tsconfig.json`);

module.exports = {
	process(src, path) {
		const isTypeScript = path.endsWith('.ts') || path.endsWith('.tsx');
		const isJavaScript = path.endsWith('.js') || path.endsWith('.jsx');

		if (isTypeScript) {
			src = typescript.transpile(
				src,
				tsConfig.compilerOptions,
				path,
				[]
			);
		}

		if (isJavaScript || isTypeScript) {
			// babel jest hack for transpile string src
			const fileName = isJavaScript
				? path
				: 'file.js';

			src = babelJest.process(
				src,
				fileName
			);
		}

		return src;
	},
};
