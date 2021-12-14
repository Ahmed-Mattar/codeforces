let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		camp(input);
		rl.close();
	}
});

let camp = (input) => {
	let n = input[0] * 1;

	let digit = '';
	for (let i = 1; i <= n; i++) {
		digit += i;
	}
	console.log(digit[n - 1]);
};
