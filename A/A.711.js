let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === input[0] * 1 + 1) {
		udayland(input);
		rl.close();
	}
});

let udayland = (input) => {
	let result = input.slice(1);
	let flag = 'NO';
	for (let i = 0; i < result.length; i++) {
		if (result[i].indexOf('OO') !== -1) {
			result[i] = result[i].replace('OO', '++');
			flag = 'YES';
			break;
		}
	}

	flag === 'YES' ? console.log('YES\n' + result.join('\n')) : console.log('NO');
};
