// stack
/* 
  You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.
  We repeatedly make duplicate removals on s until we no longer can.
  Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
*/
// O(n)
function removeDuplicates(s: string): string {
  let stack:Array<string> = [];
  for (let alp of s) {
    if (alp === stack[stack.length - 1]) stack.pop();
    else stack.push(alp);
  }
  return stack.join('');
};

// O(n^2)
function removeDuplicates2(s: string): string {
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i-1]) {
      s = s.slice(0, i-1) + s.slice(i+1);
      i -= 2; // because we removed 2 elements so back 2 steps.
    }
  }
  return s;
};

// testcase
console.log('answer: done\nresponse: ', removeDuplicates('abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbadone'));
console.log('answer: done\nresponse: ', removeDuplicates2('abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbadone'));