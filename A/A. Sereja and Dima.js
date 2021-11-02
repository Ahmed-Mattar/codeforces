let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		winner(input);
		rl.close();
	}
});

let winner = (input) => {
	let serj = 0;
	let dima = 0;
	let turn = true;
	let cards = input[1].split(' ');

	while (cards.length > 0) {
		if (turn) {
			if (cards[0] * 1 > cards[cards.length - 1]) {
				serj += cards.shift() * 1;
			} else {
				serj += cards.pop() * 1;
			}
			turn = false;
		} else {
			if (cards[0] * 1 > cards[cards.length - 1]) {
				dima += cards.shift() * 1;
			} else {
				dima += cards.pop() * 1;
			}
			turn = true;
		}
	}

	console.log(serj + ' ' + dima);
};
