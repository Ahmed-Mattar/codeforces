let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line', function(line) {
	bact(Number(line));
	rl.close();
});

bact = (input) => {
	let count = 1;
	let target = input;
	while (target !== 1) {
		if (target % 2 === 0) {
			target /= 2;
		} else {
			count++;
			target -= 1;
		}
	}
	console.log(count);
	return count;
};
