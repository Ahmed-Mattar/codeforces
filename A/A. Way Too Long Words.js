let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === input[0] * 1 + 1) {
		//n m a
		wayTooLong(input);
		rl.close();
	}
});

let wayTooLong = (array) => {
	let result = [];
	for (let i = 1; i < array.length; i++) {
		if (array[i].length > 10) {
			let mid = array[i].length - 2;
			result.push(`${array[i].charAt(0)}${mid}${array[i].charAt(array[i].length - 1)}`);
		} else {
			result.push(array[i]);
		}
		console.log(result[i - 1]);
	}
};
