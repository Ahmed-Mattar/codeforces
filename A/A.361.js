let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 1) {
		levko(input[0].split(' '));
		rl.close();
	}
});

/* 
we can only fill the diagonal with k and that's it
*/

let levko = (input) => {
	let n = input[0] * 1;
	let k = input[1] * 1;

	let ans = [];

	for (let i = 0; i < n; i++) {
		let arr = [];
		for (let j = 0; j < n; j++) {
			if (j === i) arr.push(k);
			else arr.push(0);
		}

		ans.push(arr);
	}

	console.log(ans.map((el) => el.join(' ')).join('\n'));
};
