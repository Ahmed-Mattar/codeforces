let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		capt(input);
		rl.close();
	}
});

let capt = (input) => {
	console.log(input[0].slice(0, 1).toUpperCase() + input[0].slice(1));
};
