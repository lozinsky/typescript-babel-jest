# typescript-babel-jest
Preprocessor for typescript projects, if your ```tsconfig.json``` like this:
```
"compilerOptions": {
    "target": "ES6",
    "module": ES6
}
```
## Usage

```npm i typescript-babel-jest -D```

Modify your project's ```package.json``` so that the jest section looks something like:

```
"scripts": {
    "test": "node node_modules/jest-cli/bin/jest.js"
},
"jest": {
    "scriptPreprocessor": "<rootDir>/node_modules/typescript-babel-jest",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ],
    "testRegex": "/__tests__/.*\\.(ts|tsx)$"
}
```

Just run ```npm test```, enjoy!
