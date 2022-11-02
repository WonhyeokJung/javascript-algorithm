function minMutation(start: string, end: string, bank: string[]): number {
  if (start === end) return 0;
  if (!bank.length) return -1;
  
  let q:Array<string> = [start];
  let hash:Map<string, number> = new Map();
  hash.set(start, 0);
  
  while (q.length) {
    let temp:string = q.shift()!;
    if (temp === end) return hash.get(temp)!;
    
    for (let s of bank) {
      if (hash.has(s)) continue;
      let cnt:number = 0;
      for (let i = 0; i < 8; i++) {
        if (temp[i] !== s[i]) cnt++;
      }
      if (cnt === 1) {
        hash.set(s, hash.get(temp)! + 1);
        q.push(s);
      }
    } // for
  } // while
  return -1;
};

console.log( '기대 결과값: 4, 정답 :',
  minMutation(
    "AAAACCCC", 
    "CCCCCCCC", 
    ["AAAACCCA","AAACCCCA","AACCCCCA","AACCCCCC",
    "ACCCCCCC","CCCCCCCC","AAACCCCC","AACCCCCC"]
  ));