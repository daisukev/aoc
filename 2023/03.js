const fs = require("node:fs");

fs.readFile("./inputs/3.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const grid = data.split("\n").map((s) => s.split(""));
  let sum = 0;

  /* To tell if a value is NaN, use Number.isNaN() or isNaN()
   * to most clearly determine whether a value is NaN — or,
   * since NaN is the only value that compares unequal to
   * itself, you can perform a self-comparison like x !== x.*/
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
  const isNumber = (s) => parseInt(s) === parseInt(s);

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (isNumber(grid[x][y])) {
        // wait to encounter a number
        const leftBound = Math.max(0, y - 1);
        let num = "";
        while (isNumber(grid[x][y])) {
          num += grid[x][y];
          y++;
        }
        let rightBound = y;
        num = parseInt(num);
        let upper = Math.max(0, x - 1);
        let lower = Math.min(grid.length, x + 1);
        let symbolSeen = false;
        outerLoop: for (let i = upper; i <= lower; i++) {
          for (let j = leftBound; j <= rightBound; j++) {
            if (
              !isNumber(grid[i][j]) &&
              grid[i][j] !== "." &&
              grid[i][j] !== undefined
            ) {
              symbolSeen = true;
              break outerLoop;
            }
          }
        }
        // console.log("Number:", num, "Position:", x, y);
        // console.log("Boundaries:", leftBound, rightBound, upper, lower);
        // console.log("Symbol Seen:", symbolSeen);
        if (symbolSeen) {
          sum += num;
        }
      }
    }
  }

  console.log(sum);
});
