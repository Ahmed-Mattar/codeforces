let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
  if (input.length === +input[0].split(" ")[0] + 1) {
    color(input);
    rl.close();
  }
});

let color = (input) => {
  let result = "";

  for (let i = 1; i < input.length; i++) {
    let found = input[i].split(" ").filter((el) => {
      return el === "C" || el === "Y" || el === "M";
    });
    if (found.length >= 1) {
      result = "#Color";
      console.log(result);
      return;
    }
  }
  console.log("#Black&White");
  return;
};
