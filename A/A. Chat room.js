let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line', function(line) {
	chatRoom(line);
	rl.close();
});

//M N
let chatRoom = (input) => {
	//hello
	let word = [ 'h', 'e', 'l', 'l', 'o' ];
	let count = 0;
	for (let i = 0; i < input.length; i++) {
		if (input.charAt(i) === word[count]) {
			count++;
			if (count === 5) break;
		}
	}
	count === 5 ? console.log('YES') : console.log('NO');
};
