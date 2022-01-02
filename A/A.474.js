let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
  if (input.length === 2) {
    keyboard(input);
    rl.close();
  }
});

let keyboard = (input) => {
  let string = "qwertyuiop asdfghjkl; zxcvbnm,./";
  let inputDir = input[0];
  let inputStr = input[1].split("");

  if (inputDir === "R") {
    for (let i = 0; i < inputStr.length; i++) {
      inputStr[i] = string[string.indexOf(inputStr[i]) - 1];
    }
  } else {
    for (let i = 0; i < inputStr.length; i++) {
      inputStr[i] = string[string.indexOf(inputStr[i]) + 1];
    }
  }

  console.log(inputStr.join(""));
};
