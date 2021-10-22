let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === input[0] * 2 + 1) {
		bracket(input);
		rl.close();
	}
});

let bracket = (input) => {
	for (let i = 1; i < input.length; i += 2) {
		let arr = [];
		let result = input[i + 1].length;

		for (ch of input[i + 1]) {
			if (ch === '(') arr.push(ch);
			else if (arr.length > 0) {
				arr.pop();
				result -= 2;
			}
		}

		console.log(result / 2);
	}
};
