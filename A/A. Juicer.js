let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line.split(' '));
	if (input.length === 2) {
		juice(input);
		rl.close();
	}
});

let juice = (input) => {
	let n = input[0][0];
	let b = input[0][1];
	let d = input[0][2];

	let total = 0;
	let count = 0;

	oranges = input[1];

	for (orange of oranges) {
		if (orange * 1 <= b * 1) {
			total += orange * 1;
			if (total > d * 1) {
				count++;
				total = 0;
			}
		}
	}

	console.log(count);
};
