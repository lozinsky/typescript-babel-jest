# typescript-babel-jest
Preprocessor for typescript projects in which tsconfig.json:
```
"compilerOptions": {
    "target": "ES6",
    "module": ES6
}
```
## Usage

```npm i typescript-babel-jest -D```

Add to package.json

```
"jest": {
    "scriptPreprocessor": "<rootDir>/node_modules/typescript-babel-jest"
}
```

For example:

```
"scripts": {
    "test": "node node_modules/jest-cli/bin/jest.js"
},
"jest": {
    "scriptPreprocessor": "<rootDir>/node_modules/typescript-babel-jest",
    "moduleFileExtensions": [
        "ts",
        "tsx"
    ],
    "testRegex": "/__tests__/.*\\.(ts|tsx)$"
}
```

Just run ```npm test```, enjoy!
