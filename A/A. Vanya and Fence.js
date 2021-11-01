let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		rowWidth(input);
		rl.close();
	}
});

let rowWidth = (input) => {
	let n = input[0].split(' ')[0] * 1;
	let height = input[0].split(' ')[1] * 1;

	let heights = input[1].split(' ');

	let minWidth = 0;

	for (el of heights) {
		if (el * 1 > height) {
			minWidth += 2;
		} else {
			minWidth += 1;
		}
	}

	console.log(minWidth);
};
