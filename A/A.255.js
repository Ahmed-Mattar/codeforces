let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		workout(input);
		rl.close();
	}
});

let workout = (input) => {
	let workouts = [ { type: 'chest', count: 0 }, { type: 'biceps', count: 0 }, { type: 'back', count: 0 } ];
	let gym = input[1].split(' ').map((el) => el * 1);

	let pivot = 0;
	for (el of gym) {
		workouts[pivot].count += el;
		pivot++;
		if (pivot === 3) pivot = 0;
	}
	workouts.sort((a, b) => b.count - a.count);

	console.log(workouts[0].type);
};
