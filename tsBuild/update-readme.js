"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// fs.writeFileSync('./README.md',)
let solvedQuestions = [];
fs_1.default.readdirSync('./src/leetcode').forEach(file => {
    solvedQuestions.push(file);
});
let text = `![](https://img.shields.io/badge/JavaScript-gray?&logo=JavaScript)![](https://img.shields.io/badge/TypeScript-lightgray?&logo=TypeScript)

## List
\ No. | Related Algorithm / Topics |
------------- | ------------------------------- \
\n`;
for (let file of solvedQuestions) {
    if (file.slice(0, 4) === '0000' || file === 'README.md') {
        continue;
    }
    let query = file.slice(6, -3).toLowerCase().replaceAll(' ', '-');
    text += `|[${file.slice(0, -3)}](https://leetcode.com/problems/${query})||\n`;
}
fs_1.default.writeFile('./README.md', text, (err) => {
    if (err)
        console.log(err);
    else {
        console.log("File written successfully\n");
        // console.log("The written has the following contents:");
        // console.log(fs.readFileSync("README.md", "utf8"));
    }
});
// let readme = fs.readFileSync('./README.md', 'utf8');
