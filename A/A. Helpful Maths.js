let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		sum(input);
		rl.close();
	}
});

let sum = (input) => {
	let newSum = input[0].split('+').sort((a, b) => a * 1 - b * 1).join('+');
	console.log(newSum);
};
