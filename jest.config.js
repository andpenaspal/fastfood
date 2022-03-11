/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['src/index'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  // moduleNameMapper: {
  //   'src/(.*)': '<rootDir>/src/$1',
  // },
  // moduleDirectories: ['node_modules', 'src'],
};
