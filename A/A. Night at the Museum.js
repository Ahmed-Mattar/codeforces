let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		musem(input);
		rl.close();
	}
});

let musem = (input) => {
	let str = input[0]; //zeus
	let characters = 'abcdefghijklmnopqrstuvwxyz';
	let curr = 0;
	let count = 0;

	for (ch of str) {
		let pos = characters.indexOf(ch);
		let clockWise = 0;
		let counterClock = 0;

		if (pos > curr) {
			clockWise = pos - curr;
			counterClock = curr - 0 + characters.length - pos;
			count += Math.min(clockWise, counterClock);
		} else {
			clockWise = curr - pos;
			counterClock = characters.length - curr + pos;
			count += Math.min(clockWise, counterClock);
		}

		curr = pos;
	}

	console.log(count);
};
