// Given an array of strings words and an integer k, return the k most frequent strings.
// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

// Use Map & Array.sort()
function topKFrequent(words: string[], k: number): string[] {
  let res:Map<string, number> = new Map();
  for (let i = 0; i < words.length; i++) {
    res.set(words[i], res.has(words[i]) ? res.get(words[i])! + 1 : 1);
  }
  
  let temp:Array<Array<any>> = [...res].sort().sort((a, b) => b[1] - a[1]);
  let ans:Array<string> = [];
  for (let i = 0; i < k; i++) {
    ans.push(temp[i][0]);
  }
  return ans;
};

console.log(topKFrequent(['b', 'a', 'c', 'c', 'd', 'a', 'b'], 3)); // ['a', 'b', 'c']