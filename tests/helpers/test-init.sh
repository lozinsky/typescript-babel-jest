sh tests/helpers/test-clean.sh

mkdir node_modules/typescript-babel-jest

ln -s $(pwd)/index.js $(pwd)/node_modules/typescript-babel-jest/

ln -s $(pwd)/node_modules $(pwd)/tests/fixtures/react/
ln -s $(pwd)/node_modules $(pwd)/tests/fixtures/common/