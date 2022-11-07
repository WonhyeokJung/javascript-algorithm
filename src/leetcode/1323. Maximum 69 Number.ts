// You are given a positive integer num consisting only of digits 6 and 9.
// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

function maximum69Number (num: number): number {
  let temp:Array<string> = [...String(num)];
  if (new Set(temp).size === 1 && new Set(temp).has('9')) return num;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === '6') {
      temp[i] = '9';
      return Number(temp.join(''));
    }
  }
  return num;
};

// test case
console.log('input: 66996969699\nexpected output: 96996969699\nresult: ', maximum69Number(66996969699));
