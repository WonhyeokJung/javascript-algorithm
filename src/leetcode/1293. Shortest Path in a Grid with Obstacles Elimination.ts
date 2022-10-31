// Let's try DFS first
const shortestPath = function (grid:Array<Array<number>>, k:number):number {
  let visited:Array<Array<number>> = new Array(grid.length).fill(0).map(_ => new Array(grid[0].length).fill(0));
  let res:number = Infinity;
  function dfs(y:number, x:number, step:number, obs:number):number {
    visited[y][x] = 1;
    if (y === grid.length - 1 && x === grid[0].length - 1) {
      res = Math.min(step, res);
      return res;
    }
    
    let dy:Array<number> = [-1, 0, 1, 0];
    let dx:Array<number> = [0, 1, 0, -1];
    
    for (let i = 0; i < 4; i++) {
      if (y+dy[i] < grid.length && x+dx[i] < grid[0].length && y+dy[i] >= 0 && x+dx[i] >= 0 && visited[y+dy[i]][x+dx[i]] === 0) {
        if (grid[y+dy[i]][x+dx[i]] === 1) {
          if (obs > 0) dfs(y+dy[i], x+dx[i], step+1, obs - 1);
        } else {
          dfs(y+dy[i], x+dx[i], step+1, obs);
        }
      }
    } // end for

    return res === Infinity ? -1 : res;
  } // end dfs
  
  return dfs(0, 0, 0, k);
};
// testcase
// The reason we couldn't pass it is we visited East first. If we visited South first then East, we could have made it.
// but if we  change the order of array dy&dx to make it, then some cases wouldn't pass this with the same reason.
// so, DFS is not the right answer for this problem.
console.log('Answer: 20 but result is', 
  shortestPath([
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,0,0],
    [0,1,0,1,1,1,1,1,1,1],
    [0,1,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,0,0],
    [0,1,0,1,1,1,1,1,1,1],
    [0,1,0,1,1,1,1,0,0,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,0,1,0],
    [0,0,0,0,0,0,0,0,1,0]], 
    1));
// The answer is BFS

function shortestPathBfs(grid: number[][], k: number): number {
  let [cols, rows]:Array<number> = [grid.length, grid[0].length];
  if (k >= cols + rows - 2) return cols + rows - 2;
  
  let queue:Array<{ y: number, x: number, step: number, obs: number }> = [{ y: 0, x: 0, step: 0, obs: k }];
  let visited:Set<string> = new Set();
  while (queue.length) {
    let { y, x, step, obs } = queue.shift()!;
    let cur:string = `${y}${x}${obs}`;
    if (!visited.has(cur) && y >= 0 && x >= 0 && y < cols && x < rows && obs >= 0) {
      if (y === cols-1 && x === rows-1) {
        return step;
      }
      if (grid[y][x] === 1) obs -= 1;
      visited.add(cur);
      let dy = [-1, 0, 1, 0];
      let dx = [0, 1, 0, -1];
      for (let i = 0; i < 4; i++) {
        queue.push({ y: y+dy[i], x: x+dx[i], step: step+1, obs: obs });
      } // for
    } // if
  } // while
  return -1;
};

console.log('Answer: 20 and result is', 
  shortestPathBfs([
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,0,0],
    [0,1,0,1,1,1,1,1,1,1],
    [0,1,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,0,0],
    [0,1,0,1,1,1,1,1,1,1],
    [0,1,0,1,1,1,1,0,0,0],
    [0,1,0,0,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,0,1,0],
    [0,0,0,0,0,0,0,0,1,0]], 
    1));