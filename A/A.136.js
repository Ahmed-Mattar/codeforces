let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		presents(input);
		rl.close();
	}
});

let presents = (input) => {
	const nFriends = input[0] * 1;
	const ans = new Array(nFriends).fill(0);
	const gifts = input[1].split(' ');

	for (let i = 1; i <= nFriends; i++) {
		ans.splice(gifts[i - 1], 1, i);
	}
	ans.shift();
	console.log(ans.join(' '));
};
