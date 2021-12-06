let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		snake(input);
		rl.close();
	}
});

function matrix(n, m) {
	return Array.from(Array(n), () => Array(m).fill('.'));
}

let snake = (input) => {
	let table = matrix(input[0].split(' ')[0] * 1, input[0].split(' ')[1] * 1);
	let right = true;
	for (let i = 0; i < table.length; i++) {
		if (i % 2 == 0) table[i].fill('#');
		else {
			if (right) {
				table[i].splice(table[i].length - 1, 1, '#');
				right = false;
			} else {
				{
					table[i].splice(0, 1, '#');
				}
				right = true;
			}
		}
	}

	console.log(table.map((el) => el.join('')).join('\n'));
};
