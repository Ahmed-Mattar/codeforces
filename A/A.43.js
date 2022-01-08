let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
  if (input.length === +input[0] + 1) {
    football(input);
    rl.close();
  }
});

let football = (input) => {
  let score = {};

  for (let i = 1; i < input.length; i++) {
    if (!score[input[i]]) {
      score[input[i]] = 0;
    }
    score[input[i]] += 1;
  }

  let result = Object.entries(score).sort((a, b) => {
    return b[1] - a[1];
  });

  console.log(result[0][0]);
};
