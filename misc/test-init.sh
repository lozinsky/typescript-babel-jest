mkdir node_modules/typescript-babel-jest
mkdir node_modules/typescript-babel-jest/source
ln -s $(pwd)/source/preprocessor.js $(pwd)/node_modules/typescript-babel-jest/source
ln -s $(pwd)/index.js $(pwd)/node_modules/typescript-babel-jest/

ln -s $(pwd)/node_modules $(pwd)/tests/react/
ln -s $(pwd)/node_modules $(pwd)/tests/common/