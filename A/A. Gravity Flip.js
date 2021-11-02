let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		gravity(input);
		rl.close();
	}
});

let gravity = (input) => {
	let col = input[0];
	let boxes = input[1].split(' ');

	boxes.sort((a, b) => a * 1 - b * 1);
	console.log(...boxes);
};
