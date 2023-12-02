const fs = require("node:fs");

const MAX_RED = 12;
const MAX_GREEN = 13;
const MAX_BLUE = 14;

fs.readFile("./inputs/2.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let sum = 0;
  const games = data
    .trim()
    .split("\n")
    .map((subGame) => subGame.trim().split(";"));
  const totalGames = games.length;
  for (let i = 0; i < totalGames; i++) {
    const gameNum = i + 1;
    const pull = games[i]
      .join()
      .split(" ")
      .map((s) => s.replace(",", ""));
    let impossible = false;
    for (let j = 0; j < pull.length; j += 2) {
      const color = pull[j + 1];
      const numColors = parseInt(pull[j]);
      if (
        (color === "red" && numColors > MAX_RED) ||
        (color === "blue" && numColors > MAX_BLUE) ||
        (color === "green" && numColors > MAX_GREEN)
      ) {
        impossible = true;
        break;
      }
    }
    if (!impossible) {
      sum += gameNum;
    }
  }
  console.log(sum);
});
