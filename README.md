[![Build Status](https://img.shields.io/travis/lozinsky/typescript-babel-jest/master.svg?style=flat-square)](https://travis-ci.org/lozinsky/typescript-babel-jest)
[![npm version](https://img.shields.io/npm/v/typescript-babel-jest.svg?style=flat-square)](https://www.npmjs.com/package/typescript-babel-jest)
[![Dependencies Status](https://david-dm.org/lozinsky/typescript-babel-jest/status.svg?style=flat-square)](https://david-dm.org/lozinsky/typescript-babel-jest)
[![DevDependencies Status](https://david-dm.org/lozinsky/typescript-babel-jest/dev-status.svg?style=flat-square)](https://david-dm.org/lozinsky/typescript-babel-jest?type=dev)

# typescript-babel-jest

Preprocessor for typescript projects in which the ```tsconfig.json``` is similar to that:

```json
{
    "compilerOptions": {
        "target": "ES6",
        "module": "ES6"
    }
}
```

## Usage

To use this in your project, run:

```sh
npm i typescript-babel-jest -D
```

Modify your project's ```package.json``` so that the jest section looks something like:

```json
{
    "scripts": {
        "test": "jest --no-cache"
    },
    "jest": {
        "transform": {
            "^.+\\.(ts|tsx)$": "typescript-babel-jest"
        },
        "moduleFileExtensions": [
            "ts",
            "tsx",
            "js"
        ],
        "testRegex": "/__tests__/.*\\.test\\.(ts|tsx)$"
    }
}
```

Just run ```npm test```, enjoy!

## Quick start to run tests (only if you're working on this package)

```sh
git clone https://github.com/lozinsky/typescript-babel-jest.git
cd typescript-babel-jest
npm i
npm test
```