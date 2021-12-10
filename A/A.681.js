let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === input[0] * 1 + 1) {
		contest(input);
		rl.close();
	}
});

let contest = (input) => {
	let answer = 'NO';
	for (let i = 1; i < input.length; i++) {
		let entry = input[i].split(' ');
		if (entry[1] * 1 >= 2400 && entry[1] * 1 < entry[2] * 1) {
			answer = 'YES';
			break;
		}
	}
	console.log(answer);
};
