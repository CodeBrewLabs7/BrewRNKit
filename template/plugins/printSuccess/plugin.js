const { green, blue, yellow, red } = require('kleur');

module.exports = {
	async apply(value, previousValues) {
		return new Promise(resolve => {
			console.log('\n');
			console.log(
				'Code Brew Labs React-Native Boilerplate initialized with success ! 🚀\n'
			);
			console.log(green("Thanks for choosing our boilerplate"));
			console.log(blue('  THE TYPESCRIPT VERSION 📘'));
			console.log('\n');
			resolve();
		});
	},
};
