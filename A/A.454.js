let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		diamond(input);
		rl.close();
	}
});

let diamond = (input) => {
	let str1 = '';
	let rows = Number(input[0]);

	let start = 1;
	let increase = 2;

	for (let i = 0; i < rows; i++) {
		str1 += '*'.repeat((rows - start) / 2) + 'D'.repeat(start) + '*'.repeat((rows - start) / 2) + '\n';
		start += increase;

		if (start === rows) increase = -2;
	}

	console.log(str1);
};
