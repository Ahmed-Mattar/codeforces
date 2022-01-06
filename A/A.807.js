let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
  if (input.length === +input[0] + 1) {
    rated(input);
    rl.close();
  }
});

let rated = (input) => {
  let rated = false;
  let unrated = false;
  const ratings = input.map((el) => el.split(" "));

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i][0] !== ratings[i][1]) {
      rated = true;
      break;
    }

    for (let j = i + 1; j < ratings.length; j++) {
      if (+ratings[i][0] < +ratings[j][0]) {
        unrated = true;
        break;
      }
    }
  }

  if (rated) console.log("rated");
  else if (unrated) console.log("unrated");
  else console.log("maybe");
};

/*
Given that all ai = bi, the round is unrated for sure if for some i < j we have ai < aj. This can be checked using two nested for-loops over i and j.

*/
