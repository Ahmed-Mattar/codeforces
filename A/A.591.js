let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 3) {
		wizard(input);
		rl.close();
	}
});

/**
 * 
 * (v1+v2)t = d
 * c = v1 * t
 */

let wizard = (input) => {
	let d = input[0] * 1;
	let p = input[1] * 1;
	let q = input[2] * 1;

	ans = d / (p + q) * p;

	console.log(ans);
};
