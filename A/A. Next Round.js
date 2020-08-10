let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		nextRound(input);
		rl.close();
	}
});

let nextRound = (array) => {
	let kth = array[1].split(' ')[array[0].split(' ')[1] * 1 - 1];
	let result = array[1].split(' ').filter((el) => {
		return el * 1 >= kth && el * 1 > 0;
	});
	console.log(result.length);
};
