let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		crimes(input[1].split(' '));
		rl.close();
	}
});

let crimes = (input) => {
	let chronological = input;
	let crimes = 0;
	let officers = 0;

	for (el of chronological) {
		if (el === '-1') {
			if (officers > 0) officers--;
			else crimes++;
		} else {
			officers += el * 1;
		}
	}

	console.log(crimes);
};
