// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces

const reverseWords = function(s:string):string {
  let res:Array<string> = [];
  let temp:string = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') temp += s[i];
    else {
      if (temp !== '') res.push(temp);
      temp = '';
    }
  }
  if (temp !== '') res.push(temp);
  return res.reverse().join(' ');
};

const reverseWords2 = function (s:string):string {
  let res:Array<string> = [];
  let temp:string = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') temp += s[i];
    else {
      res.push(temp);
      temp = '';
    }
  }
  res.push(temp);
  return res.filter(x => x !== '').reverse().join(' ');
};

const reverseWordsOneLine = function(s:string):string {
  return s.trim().split(' ').filter(v => v).reverse().join(' ');
};

// testcase
console.log('expected response: "exmaple good a"');
console.log(reverseWords("  a good   example  "));
console.log(reverseWords2("  a good   example  "));
console.log(reverseWordsOneLine("  a good   example  "));