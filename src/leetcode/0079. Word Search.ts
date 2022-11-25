// DFS, Backtracking

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

function exist(board: string[][], word: string): boolean {
  let res:boolean = false;
  let visited:Array<Array<number>> = new Array(board.length).fill(0).map(_ => new Array(board[0].length).fill(0));
  
  function dfs(y:number, x:number, idx:number) {
    if (visited[y][x] === 1 || res === true) return;
    if (idx === word.length) {
      res = true;
      return;
    }
    visited[y][x] = 1;
    let dy = [-1, 0, 1, 0];
    let dx = [0, 1, 0, -1];
    
    for (let i = 0; i < 4; i++) {
      if (y + dy[i] >= 0 && x + dx[i] >= 0 && y + dy[i] < board.length && x + dx[i] < board[0].length && board[y+dy[i]][x+dx[i]] === word[idx]) {
        dfs(y+dy[i], x+dx[i], idx+1);
      }
    }
    visited[y][x] = 0;
  }
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        dfs(i, j, 1);
      }
    }
  }
  
  return res;
};

// testcase
console.log('answer: true\noutput:', exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));
