let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		socks(input);
		rl.close();
	}
});

let socks = (input) => {
	let a = input[0].split(' ')[0];
	let b = input[0].split(' ')[1];

	let smaller = Math.min(a, b);

	let diff = smaller;
	a -= smaller;
	b -= smaller;
	let same = Math.floor(a / 2) + Math.floor(b / 2);
	console.log(diff, same);
};
