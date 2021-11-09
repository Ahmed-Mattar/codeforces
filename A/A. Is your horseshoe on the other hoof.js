let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line.split(' '));
	if (input.length === 1) {
		horse(input);
		rl.close();
	}
});

let horse = (input) => {
	let set = new Set();

	for (let i = 0; i < input[0].length; i++) {
		set.add(input[0][i]);
	}

	console.log(4 - set.size);
};
