let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line.split(' '));
	if (input.length === 5) {
		beautiful(input);
		rl.close();
	}
});

let beautiful = (input) => {
	let result = 0;

	loop1: for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input.length; j++) {
			if (input[i][j] === '1') {
				result = Math.abs(i - 2) + Math.abs(j - 2);
				break loop1;
			}
		}
	}

	console.log(result);
};
