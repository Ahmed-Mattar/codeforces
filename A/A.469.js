let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
  if (input.length === 3) {
    guy(input);
    rl.close();
  }
});

let guy = (input) => {
  const n = +input[0];
  const p = input[1].split(" ");
  const q = input[2].split(" ");
  p.shift();
  q.shift();
  const sol = [...p, ...q];
  const set = new Set(sol);
  set.size === n
    ? console.log("I become the guy.")
    : console.log("Oh, my keyboard!");
};
