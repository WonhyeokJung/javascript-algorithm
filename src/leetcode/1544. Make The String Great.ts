// use Upper Case & slice
function makeGood(s: string): string {
  let i:number = 0;
  while (i < s.length - 1) {
    if (s[i] !== s[i+1] && (s[i].toUpperCase() === s[i+1] || s[i].toLowerCase() === s[i+1])) {
      s = s.slice(0, i) + s.slice(i+2);
      i = 0;
      continue;
    }
    i++;
  }
  return s;
};

// Stack
function makeGood2(s: string): string {
  let stack:Array<string> = [];
  
  for (let i = 0; i < s.length; i++) {
    if (Math.abs(stack[stack.length - 1]?.charCodeAt(0) - s[i].charCodeAt(0)) === 32) {
      stack.pop();  
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join('');
};

console.log('Use slice: ', makeGood('leEvVcccdfGhHiijlKLkK'));
console.log('Use stack:', makeGood2('leEvVcccdfGhHiijlKLkK'));