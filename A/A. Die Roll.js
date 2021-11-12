let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line.split(' '));
	if (input.length === 1) {
		roll(input);
		rl.close();
	}
});

let roll = (input) => {
	let y = input[0][0] * 1;
	let w = input[0][1] * 1;

	let numerator = 7 - Math.max(y, w);

	if (6 % numerator === 0) {
		console.log(`1/${6 / numerator}`);
	} else if (numerator % 2 === 0) {
		console.log(`${numerator / 2}/3`);
	} else {
		console.log(`${numerator}/6`);
	}
};
