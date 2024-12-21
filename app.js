//write a code that takes from 10 text files,lines in the amount of the file number (text2-2 lines,text10-10 lines0, and adds them to res.txt

const fs = require("fs");
const path = require("path");

function GetRowsFromFile(filePath, i) {
  const content = fs.readFileSync(filePath, "utf-8");
  const rows = content.split("\n");
  return rows.slice(0, i);
}

let arr = [];

function addtoarr() {
  for (let i = 1; i <= 10; i++) {
    const filePath = path.join(__dirname, `text${i}.txt`);
    const r = GetRowsFromFile(filePath, i);
    arr = arr.concat(r);
  }
  fs.writeFileSync("res.txt", arr.join("\n"), "utf-8");
}

addtoarr();
