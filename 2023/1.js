const fs = require("node:fs");

fs.readFile("./inputs/1.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const arr = data.split("\n");
  const nStrings = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const substrIndex = (substr, strings) => {
    for (const string in strings) {
      const index = substr.indexOf(string);
      if (index !== -1) {
        return string;
      }
    }
    return -1;
  };
  let sum = 0;
  for (const s of arr) {
    let str = "";
    if (s.length === 0) continue;
    for (let i = 0; i < s.length; i++) {
      let substr = s.substring(0, i);
      const sIndex = substrIndex(substr, nStrings);
      if (typeof sIndex === "string") {
        str += nStrings[sIndex];
        break;
      }
      if (parseInt(s[i])) {
        str += s[i];
        break;
      }
    }
    for (let j = s.length - 1; j >= 0; j--) {
      let substr = s.substring(j, s.length);
      const sIndex = substrIndex(substr, nStrings);
      if (typeof sIndex === "string") {
        str += nStrings[sIndex];
        break;
      }
      if (parseInt(s[j])) {
        str += s[j];
        break;
      }
    }
    sum += parseInt(str);
  }
  console.log(sum);
});
