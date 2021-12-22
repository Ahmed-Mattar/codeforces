let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === input[0].split(' ')[0] * 1 + 1) {
		iceCream(input);
		rl.close();
	}
});

let iceCream = (input) => {
	let initial = input[0].split(' ')[1] * 1;
	let distressed = 0;
	let current = initial;
	for (let i = 1; i < input.length; i++) {
		if (input[i].split(' ')[0] === '+') {
			current += input[i].split(' ')[1] * 1;
		} else {
			if (input[i].split(' ')[1] * 1 > current) {
				distressed++;
			} else {
				current -= input[i].split(' ')[1] * 1;
			}
		}
	}

	console.log(current, distressed);
};
