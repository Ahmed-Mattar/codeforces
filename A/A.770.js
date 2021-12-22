let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		newPass(input[0].split(' '));
		rl.close();
	}
});

let newPass = (input) => {
	const n = input[0];
	const k = input[1];
	const alpha = 'abcdefghijklmnopqrstuvwxyz';

	let pointer = 0;
	let pass = [];

	for (let i = 0; i < n; i++) {
		if (pointer < k) {
			pass.push(alpha[pointer]);
			pointer++;
		} else {
			pointer = 0;

			pass.push(alpha[pointer]);
			pointer++;
		}
	}

	console.log(pass.join(''));
};
