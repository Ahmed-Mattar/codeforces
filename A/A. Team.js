let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === input[0] * 1 + 1) {
		//n m a
		input.shift();
		team(input);
		rl.close();
	}
});

let team = (array) => {
	const reducer = (accumulator, currentValue) => 1 * accumulator + 1 * currentValue;
	let result = array
		.map((el) => {
			return el.split(' ').reduce(reducer);
		})
		.filter((el) => {
			return el >= 2;
		});
	console.log(result.length);
};
