let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		lucky(input);
		rl.close();
	}
});

let lucky = (input) => {
	let k = input[0].split(' ')[1] * 1;

	let numbers = input[1].split(' ');
	let ans = 0;
	for (n of numbers) {
		let count = 0;

		for (ch of n) {
			if (ch === '4' || ch === '7') count++;
		}

		if (count <= k) ans++;
	}

	console.log(ans);
};
