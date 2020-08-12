let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line', function(line) {
	capsLock(line);
	rl.close();
});

let capsLock = (input) => {
	if (checkStr(input.substring(1))) {
		let firstChar = input.charAt(0);
		checkStr(firstChar) ? (firstChar = firstChar.toLowerCase()) : (firstChar = firstChar.toUpperCase());
		console.log(firstChar + '' + input.substring(1).toLowerCase());
	} else {
		console.log(input);
	}
};

let checkStr = (str) => {
	return str === str.toUpperCase();
};
