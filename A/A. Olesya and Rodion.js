let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		wantedNum(input[0].split(' '));
		rl.close();
	}
});

let wantedNum = (input) => {
	let n = Number(input[0]);
	let t = Number(input[1]);

	let number = new Array(n);

	for (let i = 0; i < number.length; i++) {
		if (i === 0) {
			number[i] = 1;
		} else number[i] = 0;
	}

	if (t !== 10) {
		number[0] = number[0] * t;
	}

	if (number.length > 1) console.log(number.join(''));
	else if (number[0] % t === 0) console.log(number[0]);
	else console.log(-1);
};
