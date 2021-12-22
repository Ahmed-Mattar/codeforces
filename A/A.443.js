let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		anton(input[0]);
		rl.close();
	}
});

let anton = (input) => {
	let str = input.slice(1, input.length - 1);

	if (str.length > 0) {
		str = str.replace(/ /g, '').split(',');
		const set = new Set(str);
		console.log(set.size);
	} else {
		console.log(0);
	}
};
