let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		bigger(input);
		rl.close();
	}
});

let bigger = (input) => {
	let a = input[0].split(' ')[0] * 1;
	let b = input[0].split(' ')[1] * 1;
	let years = 0;

	while (a <= b) {
		a = a * 3;
		b = b * 2;
		years++;
	}

	console.log(years);
};
