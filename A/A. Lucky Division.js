let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line', function(line) {
	luckyNum(line);
	rl.close();
});

let luckyNum = (input) => {
	// [4,7,44,77,47,74,444,447,474,477,777,774,747,744]
	let luck = [ 4, 7, 44, 77, 47, 74, 444, 447, 474, 477, 777, 774, 747, 744 ];
	let x = luck.filter((el) => {
		if (input % el === 0) return el;
	});
	x.length > 0 ? console.log('YES') : console.log('NO');
};
