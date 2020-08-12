let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

rl.on('line', function(line) {
	input.push(line);
	if (input.length === 3) {
		expression(input);
		rl.close();
	}
});

let expression = (input) => {
	//1+2+3 _ 1*2*3 _ (1+2)*3  _ 1*(2+3)    _ 1*2+3 _ 1+2*3
	input = input.map((el) => {
		return el * 1;
	});

	let val = [
		input[0] + input[1] + input[2],
		input[0] * input[1] * input[2],
		(input[0] + input[1]) * input[2],
		input[0] * (input[1] + input[2]),
		input[0] * input[1] + input[2],
		input[0] + input[1] * input[2]
	];

	var max = val.reduce(function(a, b) {
		return Math.max(a, b);
	});

	console.log(max);
};
