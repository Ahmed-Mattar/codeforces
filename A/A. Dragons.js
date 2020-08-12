let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

rl.on('line', function(line) {
	input.push(line.split(' ').map((el) => el * 1));
	if (input.length === input[0][1] * 1 + 1) {
		dragons(input);
		rl.close();
	}
});

let dragons = (input) => {
	let array = input;
	let S = array[0][0];
	array.shift();
	array.sort((a, b) => {
		if (a[0] < b[0]) return -1;
		if (a[0] > b[0]) return 1;
		return 0;
	});
	let flag = 1;
	for (let i = 0; i < array.length; i++) {
		if (S > array[i][0]) {
			S += array[i][1];
			continue;
		} else {
			flag = 0;
			break;
		}
	}

	flag === 0 ? console.log('NO') : console.log('YES');
};
