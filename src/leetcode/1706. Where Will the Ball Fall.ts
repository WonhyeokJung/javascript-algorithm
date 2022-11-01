const findBall = function (grid:number[][]):number[] {
  let res:number[] = new Array(grid[0].length).fill(0).map((x, idx) => idx);
  
  const dfs = function (y:number, x:number):number {
    // 사다리처럼 경로가 정해져 있어, 만나는 지점이 있으면 볼이 무조건 멈춘다.
    if (grid[y][x] === -1 && grid[y][x-1] === 1 || grid[y][x] === 1 && grid[y][x+1] === -1) return -1;
    if (grid[y][x] === -1 && x === 0) return -1;
    if (grid[y][x] === 1 && x === res.length - 1) return -1;
    
    if (y === grid.length - 1) {
      return x + grid[y][x];
    }
    
    return dfs(y+1, grid[y][x] + x);
  }
  
  for (let i = 0; i < res.length; i++) {
    res[i] = dfs(0, i);
  }
  return res;
};

function findBallAlt (grid:Array<Array<number>>):number[] {
  let res:Array<number> = new Array(grid[0].length).fill(0);
  
  const dfs = function (y:number, x:number):number {
    // 함수를 한번 더 돌게 된다.
    if (y === grid.length) return x;
    if (grid[y][x] === -1 && grid[y][x-1] === -1 || grid[y][x] === 1 && grid[y][x+1] === 1) return dfs(y+1, grid[y][x] + x);
    
    return -1;
  }
  
  for (let i = 0; i < res.length; i++) {
    res[i] = dfs(0, i);
  }
  return res;
};

// testcase
console.time('1');
console.log('1번 결과 : ', findBall([[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]));
console.timeEnd('1');
console.time('2');
console.log('2번 결과 : ', findBallAlt([[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]));
console.timeEnd('2');
