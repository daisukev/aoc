const fs = require("node:fs");

const MAX_RED = 12;
const MAX_GREEN = 13;
const MAX_BLUE = 14;

fs.readFile("./inputs/2.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
