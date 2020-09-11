module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^State/(.*)': '<rootDir>/src/state/$1',
  }
};