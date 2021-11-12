let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === input[2] * 1 + 3) {
		roll(input);
		rl.close();
	}
});

let roll = (input) => {
	let birds = input[1].split(' ').map((el) => el * 1);
	let rounds = input.slice(3);

	rounds = rounds.map((el) => el.split(' ').map((el) => el * 1));

	for (let i = 0; i < rounds.length; i++) {
		let wireNum = rounds[i][0] - 1;
		if (wireNum <= 0) {
			birds[wireNum + 1] += birds[wireNum] - rounds[i][1];
			birds[wireNum] = 0;
		} else if (wireNum >= birds.length - 1) {
			birds[wireNum - 1] += rounds[i][1] - 1;
			birds[wireNum] = 0;
		} else {
			birds[wireNum + 1] += birds[wireNum] - rounds[i][1];
			birds[wireNum - 1] += rounds[i][1] - 1;
			birds[wireNum] = 0;
		}
	}

	birds.slice(0, input[0] * 1).map((el) => console.log(el));
};
