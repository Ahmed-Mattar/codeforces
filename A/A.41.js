let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		translate(input);
		rl.close();
	}
});

let translate = (input) => {
	let word1 = input[0];
	let word2 = input[1].split('').reverse().join('');
	word1 === word2 ? console.log('YES') : console.log('NO');
};
