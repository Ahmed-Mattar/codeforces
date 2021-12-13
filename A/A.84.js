let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		army(input);
		rl.close();
	}
});

let army = (input) => {
	let n1 = input[0] * 1;
	let n2 = input[0] * 1;

	let ans = 0;

	ans += n1 / 2;
	n2 -= n1 / 2;
	ans += n2;
	n1 -= n2;
	// 3rd step we have to take all
	ans += n1;

	console.log(ans);
};
