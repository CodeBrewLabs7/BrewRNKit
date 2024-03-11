module.exports = {
	preset: 'react-native',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	transformIgnorePatterns: [
		'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation|ky|react-redux|@redux/hooks)',
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
	testMatch: ['**/*.test.ts?(x)', '**/*.test.js?(x)'],
	transform: {
		'\\.(ts|tsx)$': 'ts-jest',
	  },
};