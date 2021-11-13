let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		cases(input);
		rl.close();
	}
});

let cases = (input) => {
	let n = input[0];
	let string = input[1];
	let ones = 0;
	let zeros = 0;
	for (ch of string) {
		if (ch == '1') ones++;
		if (ch == '0') zeros++;
	}

	console.log(n - Math.min(ones, zeros) * 2);
};
