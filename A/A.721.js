let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		crossword(input);
		rl.close();
	}
});

let crossword = (input) => {
	let str = input[1];

	let result = str.split(/W+/).filter((el) => el.length !== 0);
	let seperatedResult = result.map((el) => el.length);
	console.log(result.length);
	console.log(seperatedResult.join(' '));
};
