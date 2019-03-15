module.exports = {
  transform: {
    ".*": 'babel-jest',
  },
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    "^.+\\.(css)$": "identity-obj-proxy",
    "^.+\\.(png|svg|txt)$": "<rootDir>/tests/__mocks__/file.mock",
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
}
