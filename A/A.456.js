let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === input[0] * 1 + 1) {
		laptop(input);
		rl.close();
	}
});

let laptop = (input) => {
	let PQ = input.slice(1).map((el) => el.split(' ').map((el) => Number(el)));
	PQ.sort((a, b) => {
		return a[0] - b[0];
	});

	let flag = false;

	for (let i = 0; i < PQ.length; i++) {
		if (PQ[i + 1] && PQ[i][1] > PQ[i + 1][1]) {
			flag = true;
			break;
		}
	}

	flag ? console.log('Happy Alex') : console.log('Poor Alex');
};
