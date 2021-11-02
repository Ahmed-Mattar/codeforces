let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		min(input);
		rl.close();
	}
});

let min = (input) => {
	let string = input[1];

	let arr = [ input[1][0] ];
	let count = 0;

	for (let i = 1; i < string.length; i++) {
		if (string[i] === arr[0]) {
			count++;
			arr[0] = string[i];
		} else {
			arr[0] = string[i];
		}
	}

	console.log(count);
};
