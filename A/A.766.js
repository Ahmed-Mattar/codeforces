let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		long(input);
		rl.close();
	}
});

let long = (input) => {
	let str1 = input[0];
	let str2 = input[1];

	if (str1 === str2) {
		console.log(-1);
		return;
	}
	str1.length > str2.length
		? console.log(str1.length)
		: str1 < str2 ? console.log(str2.length) : console.log(str2.length);
};
