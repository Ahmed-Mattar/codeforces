let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === input[0] * 1 + 1) {
		cake(input.slice(1));
		rl.close();
	}
});

// handshake problem
let cake = (input) => {
	let result = 0;

	for (let i = 0; i < input.length; i++) {
		let row = 0;
		let col = 0;
		for (let j = 0; j < input.length; j++) {
			if (input[i][j] === 'C') row++;
			if (input[j][i] === 'C') col++;
		}

		result += row * (row - 1) / 2;
		result += col * (col - 1) / 2;
	}

	console.log(result);
};
