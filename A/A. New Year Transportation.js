let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line.split(' '));
	if (input.length === 2) {
		transport(input);
		rl.close();
	}
});

let transport = (input) => {
	let n = input[0][0] * 1;
	let to = input[0][1] * 1;

	let portals = input[1];
	let reached = false;

	for (let i = 0; i < portals.length; i = i + Number(portals[i])) {
		if (to - 1 === i + Number(portals[i])) {
			reached = true;
			break;
		}
	}

	if (reached === true) console.log('YES');
	else console.log('NO');
};
