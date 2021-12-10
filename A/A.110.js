let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		lucky(input);
		rl.close();
	}
});

let lucky = (input) => {
	let str = input[0];
	count = 0;
	for (ch of str) {
		if (ch === '4' || ch === '7') count++;
	}
	let str1 = count.toString();
	let flag = true;
	for (ch of str1) {
		if (ch === '4' || ch === '7') continue;
		else flag = false;
	}

	flag ? console.log('YES') : console.log('NO');
};
