module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jest-setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation)',
  ],
  testPathIgnorePatterns: ['timer-utils', 'examples/', 'experiments-app/', 'experiments-rtl/'],
  testTimeout: 60000,
  transformIgnorePatterns: ['/node_modules/(?!(@react-native|react-native)/).*/'],
  clearMocks: true,
};
