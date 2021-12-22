let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		olympiad(input);
		rl.close();
	}
});

let olympiad = (input) => {
	let students = input[1].split(' ');
	let ones = [];
	let twos = [];
	let threes = [];

	for (let i = 0; i < students.length; i++) {
		if (students[i] === '1') ones.push(i + 1);
		if (students[i] === '2') twos.push(i + 1);
		if (students[i] === '3') threes.push(i + 1);
	}

	let ans = '';

	for (let i = 0; i < Math.min(ones.length, twos.length, threes.length); i++) {
		ans += `${ones[i]} ${twos[i]} ${threes[i]}\n`;
	}

	console.log(Math.min(ones.length, twos.length, threes.length));
	console.log(ans);
};
