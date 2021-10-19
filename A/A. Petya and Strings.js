let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		compare(input);
		rl.close();
	}
});

let compare = (input) => {
	let str1 = input[0].toLowerCase();
	let str2 = input[1].toLowerCase();

	if (str1 === str2) {
		console.log('0');
		return;
	}

	if (str1 < str2) {
		console.log('-1');
		return;
	} else {
		console.log('1');
		return;
	}
};
