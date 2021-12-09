let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		calc(input);
		rl.close();
	}
});

let calc = (input) => {
	let str1 = input[0];
	let str2 = input[1];
	let output = '';

	for (let i = 0; i < str1.length; i++) {
		if (str1[i] === str2[i]) output += '0';
		else output += '1';
	}

	console.log(output);
};
