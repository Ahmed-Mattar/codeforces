let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === input[0] * 1 + 1) {
		Magnet(input);
		rl.close();
	}
});

let Magnet = (input) => {
	let groups = 0;
	let initial = input[1];
	for (let i = 2; i < input.length; i++) {
		if (input[i] === initial) {
			continue;
		} else {
			groups++;
			initial = input[i];
		}
	}
	console.log(groups + 1);
};
