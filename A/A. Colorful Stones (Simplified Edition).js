let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		color(input);
		rl.close();
	}
});

let color = (input) => {
	let s = input[0];
	let t = input[1];

	let positon = 0;

	for (let i = 0; i < t.length; i++) {
		if (t[i] === s[positon]) positon++;
	}

	console.log(positon + 1);
};
