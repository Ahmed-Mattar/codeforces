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
	let countA = 0;
	let countD = 0;

	for (el of input[1]) {
		if (el === 'A') countA++;
		else countD++;
	}

	if (countA === countD) console.log('Friendship');
	else if (countA > countD) console.log('Anton');
	else if (countA < countD) console.log('Danik');
};
