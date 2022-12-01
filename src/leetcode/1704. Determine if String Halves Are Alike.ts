// 

// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
// Return true if a and b are alike. Otherwise, return false.
// s.length is even.
function halvesAreAlike(s: string): boolean {
  let vowels:Array<string> = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
  let cnt:number = 0;
  
  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.includes(s[i])) cnt += 1;
  }
  
  for (let i = s.length - 1; i >= s.length / 2; i--) {
    if (vowels.includes(s[i])) cnt -= 1;
  }
  
  return cnt === 0;
};

// testcase
console.log('answer: true\nresult: ', halvesAreAlike('book'))