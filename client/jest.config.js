module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^Features/(.*)': '<rootDir>/src/features/$1',
    '^State/(.*)': '<rootDir>/src/state/$1',
    '^Utils/(.*)': '<rootDir>/src/utils/$1',
  }
};