let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		cookies(input);
		rl.close();
	}
});

let cookies = (input) => {
	let bags = input[1].split(' ').map((el) => Number(el));
	let totalCookies = bags.reduce((acc, curr) => acc + curr);
	let ways = 0;

	for (cookie of bags) {
		if ((totalCookies - cookie) % 2 === 0) ways++;
	}

	console.log(ways);
};
