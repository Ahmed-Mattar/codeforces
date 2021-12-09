let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		bananas(input[0].split(' '));
		rl.close();
	}
});

let bananas = (input) => {
	let k = input[0] * 1;
	let w = input[1] * 1;
	let n = input[2] * 1;

	let price = n * (n + 1) / 2 * k;
	price - w > 0 ? console.log(price - w) : console.log(0);
};
