let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line.split(' '));
	if (input.length === 2) {
		XeniaTime(input);
		rl.close();
	}
});

XeniaTime = (input) => {
	let housesNum, mThings;
	[ housesNum, mThings ] = [ input[0][0] * 1, input[0][1] * 1 ];
	let to = input[1].map((el) => el * 1);

	// intialize road
	let houses = [];
	for (let i = 1; i <= housesNum; i++) houses.push(i);

	let current = houses[0];
	let count = 0;
	for (let i = 0; i < mThings; i++) {
		while (current !== to[i]) {
			if (to[i] > current) {
				count += to[i] - current;
				current = to[i];
			} else {
				count += houses[houses.length - 1] - current + 1;
				current = houses[0];
			}
		}
	}

	console.log(count);
	return count;
};
