let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
  if (input.length === 1) {
    evenOdd(input[0].split(" "));
    rl.close();
  }
});

let evenOdd = (input) => {
  const n = +input[0];
  const k = +input[1];

  let evenStart = 0;

  if (n % 2 === 0) {
    evenStart = n / 2;
  } else {
    evenStart = Math.ceil(n / 2);
  }

  if (k <= evenStart) {
    console.log(k * 2 - 1);
  } else {
    console.log((k - evenStart) * 2);
  }
};
