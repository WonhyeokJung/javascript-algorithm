// Math
function climbStairs(n: number): number {
  function pib(num: number): number {
      let [curr, nxt] = [1, 1];
      for (let i = 0; i < num; i++) {
        [curr, nxt] = [nxt, curr + nxt];
      }
      return curr;
  }
  return pib(n);
};

// testcase
console.log('answer: 3, result:', climbStairs(3));