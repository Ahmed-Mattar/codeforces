let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line.split(' '));
	if (input.length === 1) {
		solve(input);
		rl.close();
	}
});

let solve = (input) => {
	let l = input[0][0] * 1;
	let r = input[0][1] * 1;
	let a = input[0][2] * 1;
	let team = 0;

	let min = Math.min(l, r);
	team += min * 2;
	l -= min;
	r -= min;

	if (l !== 0) {
		let secMin = Math.min(l, a);
		team += secMin * 2;
		l -= secMin;
		a -= secMin;
		team += a - a % 2;
		a -= a - a % 2;
	}
	if (r !== 0) {
		let secMin = Math.min(r, a);
		team += secMin * 2;
		r -= secMin;
		a -= secMin;
		team += a - a % 2;
		a -= a - a % 2;
	}
	if (a !== 0) {
		team += a - a % 2;
	}

	console.log(team);
};
