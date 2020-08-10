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
		waterMelon(parseInt(input[0]));
		rl.close();
	}
});

let waterMelon = (input) => {
	let start = 1;
	let end = input - 1;
	let result = 'NO';
	for (let i = start; i <= end; i++) {
		if (i % 2 === 0 && end % 2 === 0) {
			result = 'YES';
		}
		end--;
	}
	console.log(result);
};
