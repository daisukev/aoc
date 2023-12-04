const fs = require("node:fs");

fs.readFile("./inputs/4.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const re = /Card.*:\s*/gi;
  let text = data;
  text = text.replaceAll(re, "");
  const cards = text
    .trim()
    .split("\n")
    .map((card) => card.trim().split("|"));

  let total = 0;
  for (const card of cards) {
    // console.log(card);
    const winners = new Set(
      card[0].replaceAll(/\s\s+/gi, " ").trim().split(" "),
    );
    const nums = new Set(card[1].replaceAll(/\s\s+/gi, " ").trim().split(" "));
    // console.log(winners.intersection(nums));
    const winningArr = [];
    for (const winner of winners) {
      if (nums.has(winner)) {
        winningArr.push(winner);
      }
    }
    let doubleTimes = winningArr.length - 1;
    let subtotal = Math.floor(2 ** doubleTimes);
    total += subtotal;
  }
  console.log(total);
});
