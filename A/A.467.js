let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === input[0] * 1 + 1) {
		room(input);
		rl.close();
	}
});

let room = (input) => {
	let count = 0;

	let rooms = input.slice(1).map((el) => el.split(' '));
	for (el of rooms) {
		if (Number(el[1]) - Number(el[0]) >= 2) count++;
	}
	console.log(count);
};
