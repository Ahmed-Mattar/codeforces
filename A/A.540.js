let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 3) {
		lock(input);
		rl.close();
	}
});

/**  
 * 
 *  0-1-2-3-4-5-6-7-8-9
 * 
 * ex  current 2 and ans 9  
 * 9-2 = 7
 * 2-0 = 2   + answer whiche is 9 = 11
 * 
 * 
 * ex current 9 and ans is 2 
 * 
 * 9-2 = 7
 * (9-9)+2      1 for reaching to 0 and 1 for reaching to 1
 * (9-9)+2+answer(2)-1 = 3
 * 
 * another way 
 * min(abs(a[i] - b[i]), 10 - abs(a[i] - b[i]))
 * 
*/

let lock = (input) => {
	let noOfDisk = input[0] * 1;
	let curr = input[1];
	let ans = input[2];
	let counter = 0;

	for (let i = 0; i < curr.length; i++) {
		counter += Math.min(Math.abs(curr[i] * 1 - ans[i] * 1), 10 - Math.abs([ curr[i] * 1 - ans[i] * 1 ]));
	}

	// for (let i = 0; i < curr.length; i++) {
	// 	let RightDirection = Infinity;
	// 	let leftDirection = Infinity;

	// 	if (curr[i] * 1 > ans[i] * 1) {
	// 		leftDirection = Math.min(curr[i] * 1 - ans[i] * 1, 9 - curr[i] * 1 + 2 + ans[i] * 1 - 1);
	// 	} else {
	// 		RightDirection = Math.min(Math.abs(curr[i] * 1 - ans[i] * 1), curr[i] * 1 - 0 + 1 + 9 - ans[i] * 1);
	// 	}

	// 	counter += Math.min(leftDirection, RightDirection);
	// }

	console.log(counter);
};
