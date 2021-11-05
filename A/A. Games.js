let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line.split(' '));
	if (input.length === input[0][0] * 1 + 1) {
		games(input);
		rl.close();
	}
});

let games = (input) => {
	let count = 0;

	for (let i = 1; i < input.length; i++) {
		for (let j = 1; j < input.length; j++) {
			if (i !== j) {
				if (input[i][0] === input[j][1]) count++;
			}
		}
	}

	console.log(count);
};
