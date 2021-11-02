let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		boyOrGirl(input);
		rl.close();
	}
});

let boyOrGirl = (input) => {
	let string = input[0];

	let characters = new Set();

	for (ch of string) characters.add(ch);

	if (characters.size % 2 === 0) console.log('CHAT WITH HER!');
	else console.log('IGNORE HIM!');
};
