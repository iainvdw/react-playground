module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupTestFrameworkScriptFile: '<rootDir>/__tests__/setupTests.js',
  testPathIgnorePatterns: ['node_modules', '<rootDir>/__tests__/setupTests.js'],
};
