let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
  if (input.length === 2) {
    oath(input);
    rl.close();
  }
});

let oath = (input) => {
  let strength = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let ans = strength.filter((el) => {
    return el !== strength[0] && el !== strength[strength.length - 1];
  });

  ans.length > 0 ? console.log(ans.length) : console.log(0);
};
