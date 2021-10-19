let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === input[0] * 1 + 1) {
		bit(input);
		rl.close();
	}
});

let bit = (input) => {
	let x = 0;

	let operations = {
		'X++': 1,
		'++X': 1,
		'--X': -1,
		'X--': -1
	};

	for (let i = 1; i < input.length; i++) {
		x += operations[input[i]];
	}

	console.log(x);
};
