// DFS
function removeStones(stones:Array<Array<number>>):number {
  let visited:Set<Array<number>> = new Set();
  let res:number = 0;
  const dfs = function (arr:Array<number>) {
    if (visited.has(arr)) return;
    visited.add(arr);
    
    // check if it's connected with other stones;
    for (let stone of stones) {
      // same row or same column
      if (stone[0] === arr[0] || stone[1] === arr[1]) {
        dfs(stone);
      }
    }
  }
  
  for (let stone of stones) {
    // if you couldn't visit stone, it is first stone we visit or separate from stones we've visited so ++res;
    if (!visited.has(stone)) {
      dfs(stone);
      res++;
    }
  }
  
  return stones.length - res;
};

// testcase
console.log('expected response : 6\nresponse:', removeStones([[3,3],[4,4],[1,4],[1,5],[2,3],[4,3],[2,4]]));