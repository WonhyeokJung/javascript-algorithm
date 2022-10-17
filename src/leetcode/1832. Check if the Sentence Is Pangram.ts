
// 1. Use Set
function checkIfPangram(sentence: string): boolean {
  let checker:Set<String> = new Set();
  for (let alp of sentence) {
    checker.add(alp);
  }
  return checker.size === 26;
};

// 2. Simplized no.1
function checkIfPangram2(sentence: string):  boolean {
  return new Set(sentence.split('')).size === 26;
  // or
  // return new Set(sentence).size === 26;
}

// 3. Shift Operator
function checkIfPangram3(sentence: string): boolean {
  let res = 0;
  /**
   * if sentence has all alphabets, res = 11111111111111111111111111(2);
   */
  for (let i = 0; i < sentence.length; i++) {
    let ci = sentence.charCodeAt(i) - 'a'.charCodeAt(0);
    // compare numbers eg. 10(2) | 101(2) === 111(2);
    // if you need to check duplication, use XOR(^) operator instead.
    res = res | (1 << ci);
  }
  // 11111111111111111111111111(2) === 10000000000000000000000000(2) - 1
  return res === ((1 << 26) - 1);
};