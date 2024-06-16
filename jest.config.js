
// eslint-disable-next-line no-undef
module.exports = {
    preset: 'ts-jest',
    testEnvironment : 'node',
    testMatch : ['**/tests/**/*.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },
      moduleNameMapper: {
        '^axios$': 'axios/dist/node/axios.cjs'
      }
    // outras configurações do Jest aqui
  };

