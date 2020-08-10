let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		//n m a
		theatreSquare(...input[0].split(' '));
		rl.close();
	}
});

let theatreSquare = (n, m, a) => {
	let fArg = parseInt(n) / parseInt(a);
	let secArg = parseInt(m) / parseInt(a);
	let result = Math.ceil(fArg) * Math.ceil(secArg);
	console.log(result);
};
