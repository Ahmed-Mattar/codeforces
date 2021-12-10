let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		year(input);
		rl.close();
	}
});

let year = (input) => {
	let flag = true;
	let year = input[0] * 1;
	let wantedYear = year;
	while (flag) {
		wantedYear++;
		if (new Set(wantedYear.toString()).size === wantedYear.toString().length) flag = false;
	}
	console.log(wantedYear);
};
