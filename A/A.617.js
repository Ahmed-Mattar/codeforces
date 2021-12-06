let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		elephant(input);
		rl.close();
	}
});

let elephant = (input) => {
	let x = input[0] * 1;
	let step = 5;
	let pos = 0;
	let count = 0;

	while (x !== pos) {
		if (pos + step <= x) {
			pos = pos + step;
			count++;
		} else {
			step--;
		}
	}

	console.log(count);
};
