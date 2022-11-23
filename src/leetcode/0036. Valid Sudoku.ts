function isValidSudoku(board:Array<Array<number|string>>):boolean {
  let blanks:Array<Array<number>> = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        blanks.push([i, j]);
      }
    }
  }
  
  function dfs(idx:number):boolean {
    // 빈값 다 채우면 true 반환
    if (idx === blanks.length) return true;
    let y:number = blanks[idx][0];
    let x:number = blanks[idx][1];
    for (let i = 0; i < 9; i++) {
      if (x !== i && board[y][i] === board[y][x]) return false;
      if (y !== i && board[i][x] === board[y][x]) return false;
    }
    
    let ny = Math.floor(y/3) * 3;
    let nx = Math.floor(x/3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if ((ny+i !== y && nx+j !== x) && board[y][x] === board[ny + i][nx + j]) return false;
      }
    }
    
    return dfs(idx + 1);
  }
  return dfs(0);
};

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]));
