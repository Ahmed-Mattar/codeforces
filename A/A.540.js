let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 3) {
		lock(input);
		rl.close();
	}
});

let lock = (input) => {
	let noOfDisk = input[0] * 1;
	let curr = input[1];
	let ans = input[2];
	let counter = 0;

	for (let i = 0; i < curr.length; i++) {
		let RightDirection = Infinity;
		let leftDirection = Infinity;

		if (curr[i] * 1 > ans[i] * 1) {
			leftDirection = Math.min(curr[i] * 1 - ans[i] * 1, 9 - curr[i] * 1 + 2 + ans[i] * 1 - 1);
		} else {
			RightDirection = Math.min(Math.abs(curr[i] * 1 - ans[i] * 1), curr[i] * 1 - 0 + 1 + 9 - ans[i] * 1);
		}

		counter += Math.min(leftDirection, RightDirection);
	}

	console.log(counter);
};
