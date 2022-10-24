/**
  You are given an array of strings arr. A string s is formed by the concatenation of a subsequence of arr that has unique characters.
  Return the maximum possible length of s.
  A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
 */
// DFS
function maxLength(arr:Array<string>): number {
  arr = arr.filter(x => x === [...new Set(x)].join(''));
  let ans = Math.max(0, Math.max(...arr.map(x => x.length)));
  
  function dfs(w:string, i:number):null | undefined {
    if (i >= arr.length) {
      ans = Math.max(ans, w.length);
      return;
    }
    
    if (w + arr[i] === [...new Set(w + arr[i])].join('')) dfs(w + arr[i], i+1);
    dfs(w, i+1);
    
    ans = Math.max(ans, w.length);
  }

  for(let i = 0; i < arr.length -1; i++) {
    dfs(arr[i], i+1);
  }
  return ans;
  
};

// testcase
console.log(maxLength(["cha","r","act","ers"])); // 6
console.log(maxLength(["ab","cd","cde","cdef","efg","fgh","abxyz"])); // 11
console.log(maxLength(['aa', 'bb'])); // 0