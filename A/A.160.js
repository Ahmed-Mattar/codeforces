let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
  if (input.length === 2) {
    twin(input);
    rl.close();
  }
});

let twin = (input) => {
  let numCoins = +input[0];
  let sum = 0;
  let coins = input[1]
    .split(" ")
    .map((el) => {
      sum += +el;
      return +el;
    })
    .sort((a, b) => b - a);

  let coinsTook = 0;
  let coinsTookValue = 0;
  let i = 0;
  while (coinsTookValue <= sum) {
    coinsTookValue += coins[i];
    coinsTook++;
    sum -= coins[i];
    i++;
  }

  console.log(coinsTook);
};
