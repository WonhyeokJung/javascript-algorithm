function reverseVowels(s: string): string {
  let vi:Array<number> = []; // vowels index
  let res:Array<string> = s.split('');
  let vowels:Array<string> = ['a','e','i','o','u', 'A', 'E', 'I', 'O','U'];
  for (let i = 0; i < res.length; i++) {
    if (vowels.indexOf(res[i])+1)vi.push(i);
  }
  vi = vi.reverse();
  for (let i = 0; i < vi.length / 2; i++) {
    [res[vi[i]], res[vi[vi.length -1 - i]]] = [res[vi[vi.length -1 - i]], res[vi[i]]];
  }
  return res.join('');
};
// testcase
console.log('expected response: holle \nresponse is :', reverseVowels('hello'));
console.log('expected response: DepleMingeOsOValliinAfinOPiaco \nresponse is :', 
  reverseVowels('DoplaMingOisAVillianOfOnePiece')
);