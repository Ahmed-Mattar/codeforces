let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		light(input);
		rl.close();
	}
});

let light = (input) => {
	let noLights = input[0].split(' ')[0] * 1;

	let pushedButtons = input[1].split(' ').map((el) => el * 1);

	let arr = new Array(noLights).fill(null);

	for (let i = 0; i < pushedButtons.length; i++) {
		if (arr[pushedButtons[i] - 1] === null) {
			for (let j = pushedButtons[i] - 1; j < arr.length; j++) {
				if (arr[j] === null) arr[j] = pushedButtons[i];
				else break;
			}
		}
	}

	console.log(arr.join(' '));
};
