let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		cards(input);
		rl.close();
	}
});

/**
 * 
 * first we get the sum of pair that can be acheived then we find pairs that can do that
 */

let cards = (input) => {
	let noOfCards = input[0] * 1;
	let cards = input[1].split(' ').map((el) => el * 1);

	let sum = cards.reduce((acc, curr) => acc + curr) / (noOfCards / 2);

	let ans = '';

	for (let i = 0; i < cards.length; i++) {
		for (j = i + 1; j < cards.length; j++) {
			if (cards[i] + cards[j] === sum) {
				ans += `${i + 1} ${j + 1} \n`;
				cards[i] = 0;
				cards[j] = 0;
				break;
			}
		}
	}

	console.log(ans);
};
