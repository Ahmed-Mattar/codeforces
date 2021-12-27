let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', function(line) {
	input.push(line);
	if (input.length === 2) {
		lineLand(input);
		rl.close();
	}
});

//   the min will always be the neighbor cities
//  the max will always be between the city and the first or last

let lineLand = (input) => {
	const nCities = input[0] * 1;
	const cities = input[1].split(' ');
	let ans = '';

	for (let i = 0; i < nCities; i++) {
		let min1 = cities[i - 1] ? cities[i - 1] * 1 : -Infinity;
		let min2 = cities[i + 1] ? cities[i + 1] * 1 : +Infinity;

		let max1 = cities[0] * 1;
		let max2 = cities[cities.length - 1] * 1;

		let min = Math.min(cities[i] * 1 - min1, min2 - cities[i] * 1);
		let max = Math.max(cities[i] * 1 - max1, max2 - cities[i] * 1);
		ans += `${min} ${max}\n`;
	}

	console.log(ans);
};
