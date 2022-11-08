"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
// fs.writeFileSync('./README.md',)
var solvedQuestions = [];
fs_1["default"].readdirSync('./src/leetcode').forEach(function (file) {
    solvedQuestions.push(file);
});
var text = "![](https://img.shields.io/badge/JavaScript-gray?&logo=JavaScript)![](https://img.shields.io/badge/TypeScript-lightgray?&logo=TypeScript)\n\n## List\n No. | Related Algorithm / Topics |\n------------- | ------------------------------- \n";
for (var _i = 0, solvedQuestions_1 = solvedQuestions; _i < solvedQuestions_1.length; _i++) {
    var file = solvedQuestions_1[_i];
    if (file.slice(0, 4) === '0000' || file === 'README.md') {
        continue;
    }
    var query = file.slice(6, -3).toLowerCase().replaceAll(' ', '-');
    text += "|[".concat(file.slice(0, -3), "](https://leetcode.com/problems/").concat(query, ")||\n");
}
fs_1["default"].writeFile('./README.md', text, function (err) {
    if (err)
        console.log(err);
    else {
        console.log("File written successfully\n");
        // console.log("The written has the following contents:");
        // console.log(fs.readFileSync("README.md", "utf8"));
    }
});
// let readme = fs.readFileSync('./README.md', 'utf8');
