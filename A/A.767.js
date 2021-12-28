let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
  if (input.length === 2) {
    snackTower(input);
    rl.close();
  }
});

let snackTower = (input) => {
  let n = input[0] * 1;
  let order = input[1].split(" ").map(Number);
  let target = n;

  let map = [];
  let temp = [];

  for (let i = 0; i < n; i++) {
    let size = order[i];
    map[size] = 1;
    while (map[target] === 1) {
      temp.push(target);
      target--; // we could know the next biggest remaining snack size is this
    }

    console.log(temp.join(" "));
    temp = [];
  }
};
