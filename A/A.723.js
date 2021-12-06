let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		distance(input[0].split(' '));
		rl.close();
	}
});

let distance = (input) => {
	input = input.map((el) => el * 1).sort((a, b) => a - b);
	let p1 = input[0] * 1;
	let p2 = input[1] * 1;
	let p3 = input[2] * 1;

	console.log(p3 - p2 + p2 - p1);
};
