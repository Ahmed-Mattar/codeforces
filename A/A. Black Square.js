let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		BlackSquare(input);
		rl.close();
	}
});

let BlackSquare = (input) => {
	let str = input[1];
	let ai = input[0].split(' ');
	let calories = 0;

	for (el of str) {
		calories += ai[el * 1 - 1] * 1;
	}

	console.log(calories);
};
