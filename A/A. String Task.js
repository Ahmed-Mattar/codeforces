let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

rl.on('line', function(line) {
	stringTask(line);

	rl.close();
});

//"A", "O", "Y", "E", "U", "I",
let stringTask = (line) => {
	let vowels = [ 'a', 'o', 'y', 'e', 'u', 'i' ];
	let lowerStr = line.toLowerCase();
	let result = lowerStr.split('').map((el) => {
		if (vowels.includes(el)) {
			return '';
		} else {
			return `.${el}`;
		}
	});
	console.log(result.join(''));
};
