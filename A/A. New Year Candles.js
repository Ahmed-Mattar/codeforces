let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line', function(line) {
	candle(line.split(' '));
	rl.close();
});

candle = (input) => {
	let candles = input[0] * 1;
	let reuse = input[1] * 1;
	let hours = candles;
	let remainder = 0;

	while (candles >= reuse) {
		remainder = candles % reuse;
		candles = (candles - remainder) / reuse;
		hours += candles;
		candles += remainder;
	}

	console.log(hours);
	return hours;
};
