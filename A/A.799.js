let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		oven(input);
		rl.close();
	}
});

let oven = (input) => {
	input = input[0].split(' ').map((el) => el * 1);
	let cakes = input[0];
	let tOven = input[1];
	let kCakes = input[2];
	let dOven = input[3];

	let currentTime = 0;

	while (currentTime <= dOven) {
		cakes -= kCakes;
		currentTime += tOven;
	}

	if (cakes > 0) {
		console.log('YES');
	} else {
		console.log('NO');
	}
};
