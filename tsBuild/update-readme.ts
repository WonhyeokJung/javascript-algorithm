import fs from 'fs';

// fs.writeFileSync('./README.md',)
let solvedQuestions:Array<string> = [];
fs.readdirSync('./src/leetcode').forEach(file => {
  solvedQuestions.push(file);
});

let text = `![](https://img.shields.io/badge/JavaScript-gray?&logo=JavaScript)![](https://img.shields.io/badge/TypeScript-lightgray?&logo=TypeScript)

## List
\ No. | Related Algorithm / Topics |
------------- | ------------------------------- \
\n`
for (let file of solvedQuestions) {
  if (file.slice(0, 4) === '0000' || file === 'README.md') {
    continue;
  }
  let query:string = file.slice(6, -3).toLowerCase().replaceAll(' ', '-');
  text += `|[${file.slice(0, -3)}](https://leetcode.com/problems/${query})||\n`;
}

fs.writeFile('./README.md', text, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    // console.log("The written has the following contents:");
    // console.log(fs.readFileSync("README.md", "utf8"));
  }
});
// let readme = fs.readFileSync('./README.md', 'utf8');
