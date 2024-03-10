module.exports = {
	preset: 'react-native',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	transformIgnorePatterns: [
		'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation|ky)',
	],
	
	testPathIgnorePatterns: [
		'/node_modules/', // Ignore all files inside node_modules directory
		'/react-native-unistyles/', // Ignore the react-native-unistyles package
	  ],
	setupFilesAfterEnv: [
		'./node_modules/react-native-gesture-handler/jestSetup.js',
		"@testing-library/jest-native/extend-expect",
		'./jest.setup.js',
	],
	collectCoverageFrom: [
		'<rootDir>/src/components/**/*.tsx',
		'<rootDir>/src/App.tsx',
	],
	coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
	testMatch: ['**/*.test.ts?(x)', '**/*.test.js?(x)']
};