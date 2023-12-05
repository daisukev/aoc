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
  const cardMap = {};
  for (let i = 0; i < cards.length; i++) {
    cardMap[i + 1] = 1;
  }
  for (const [index, card] of cards.entries()) {
    const winners = new Set(
      card[0].replaceAll(/\s\s+/gi, " ").trim().split(" "),
    );
    const nums = new Set(card[1].replaceAll(/\s\s+/gi, " ").trim().split(" "));
    const winningArr = [];
    for (const winner of winners) {
      if (nums.has(winner)) {
        winningArr.push(winner);
      }
    }
    let doubleTimes = winningArr.length - 1;
    if (winningArr.length > 0) {
      // if there is a winning card, you go from the next index to however many there are
      const baseIndex = index + 1;
      for (let i = index + 1; i <= index + winningArr.length; i++) {
        cardMap[i + 1] += cardMap[baseIndex];
      }
    }

    let subtotal = Math.floor(2 ** doubleTimes);
    total += subtotal;
  }

  let cardsTotal = 0;
  for (card in cardMap) {
    cardsTotal += cardMap[card];
  }
  console.log(cardsTotal);
  console.log(total);
});
