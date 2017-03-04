[![Build Status](https://travis-ci.org/lozinsky/typescript-babel-jest.svg?branch=master)](https://travis-ci.org/lozinsky/typescript-babel-jest)
[![npm version](https://img.shields.io/npm/v/typescript-babel-jest.svg?style=flat)](https://www.npmjs.com/package/typescript-babel-jest)

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

## Quickstart to run tests (only if you're working on this package)

```sh
git clone https://github.com/lozinsky/typescript-babel-jest.git
cd typescript-babel-jest
npm i
npm test
```