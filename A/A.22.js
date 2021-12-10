let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		order(input);
		rl.close();
	}
});

let order = (input) => {
	let data = input[1].split(' ').map((el) => el * 1);
	data = data.filter((el, index) => {
		return data.indexOf(el) === index;
	});
	data.sort((a, b) => a - b);

	if (data.length > 1) console.log(data[1]);
	else console.log('NO');
};
