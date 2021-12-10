let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		dice(input[0].split(' '));
		rl.close();
	}
});

let dice = (input) => {
	let number1 = Number(input[0]);
	let number2 = Number(input[1]);
	let draw = 0;
	let one = 0;
	let two = 0;
	for (let i = 1; i <= 6; i++) {
		if (Math.abs(number1 - i) < Math.abs(number2 - i)) one++;
		else if (Math.abs(number1 - i) > Math.abs(number2 - i)) two++;
		else draw++;
	}

	console.log(one, draw, two);
};
