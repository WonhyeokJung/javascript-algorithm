// stack

/*
  You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.
  We repeatedly make k duplicate removals on s until we no longer can.
  Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.
*/
function removeDuplicates(s: string, k: number): string {
  let stack:Array<[val: string, cnt: number]> = [];
  // let stack:Array<{ val: string, cnt: number }> = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length && s[i] === stack[stack.length - 1][0]) stack[stack.length - 1][1] += 1;
    else stack.push([s[i], 1]);
    
    if (stack[stack.length - 1][1] === k) stack.pop();
  }
  return stack.map(([x,c]) => x.repeat(c)).join('');
};

// alternative type setting
type StackVal = {
  val: string;
  count: number;
}
function removeDuplicatesAlt(s: string, k: number): string {
  let stack:Array<StackVal> = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === stack[stack.length - 1]?.val) stack[stack.length - 1].count += 1;
    else stack.push({ val: s[i], count: 1 });
    
    if (stack[stack.length - 1]?.count === k) stack.pop();
  }
  return stack.map(({ val: x, count: c }) => x.repeat(c)).join('');
};

// testcase
console.log('answer: ps\nresult:', removeDuplicates("pbbcggttciiippooaais", 2));
console.log('answer: ps\nresult:', removeDuplicatesAlt("pbbcggttciiippooaais", 2));
