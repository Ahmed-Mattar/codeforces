let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		word(input);
		rl.close();
	}
});

let word = (input) => {
	let string = input[0];
	let countUpper = 0;
	let countLower = 0;

	for (ch of string) {
		if (ch === ch.toUpperCase()) countUpper++;
		else countLower++;
	}

	if (countUpper > countLower) string = string.toUpperCase();
	else string = string.toLowerCase();

	console.log(string);
};
