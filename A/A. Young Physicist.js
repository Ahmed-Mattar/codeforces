let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});
input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === input[0] * 1 + 1) {
		youngPhysicist(input);
		rl.close();
	}
});

//M N
let youngPhysicist = (input) => {
	input.shift();
	let input2 = input.map((el) => {
		return el.split(' ');
	});
	let x = 0,
		y = 0,
		z = 0;
	for (let i = 0; i < input2.length; i++) {
		x += input2[i][0] * 1;
		y += input2[i][1] * 1;
		z += input2[i][2] * 1;
	}
	if (x === 0 && y === 0 && z === 0) {
		console.log('YES');
	} else {
		console.log('NO');
	}
};
