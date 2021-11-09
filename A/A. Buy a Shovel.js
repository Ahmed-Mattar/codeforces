let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line.split(' '));
	if (input.length === 1) {
		min(input);
		rl.close();
	}
});

let min = (input) => {
	let price = input[0][0] * 1;
	let change = input[0][1] * 1;
	let count = 0;
	let i = 1;

	while ((price * i) % 10 !== change) {
		if ((price * i) % 10 === 0) break;
		i++;
		count++;
	}

	console.log(count + 1);
};
