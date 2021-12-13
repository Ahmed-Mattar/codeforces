let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		triangle(input[0] * 1);
		rl.close();
	}
});

let triangle = (input) => {
	let flag = false;
	for (let i = 1; i <= input; i++) {
		if (i * (i + 1) / 2 === input) flag = true;
	}

	flag ? console.log('YES') : console.log('NO');
};
