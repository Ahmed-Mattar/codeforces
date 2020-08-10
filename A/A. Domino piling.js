let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

rl.on('line', function(line) {
	DominoPiling(line);

	rl.close();
});

//M N
let DominoPiling = (line) => {
	let input = line.split(' ');
	let M = input[0] * 1;
	let N = input[1] * 1;

	let num1 = M % 2 === 0 ? M / 2 : (M - 1) / 2;
	if (num1 === M / 2) {
		console.log(num1 * N);
	} else {
		console.log(num1 * N + Math.floor(N / 2));
	}
};
