// BFS

// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.
// In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.
// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

function nearestExit(maze: string[][], entrance: number[]): number {

  let q:Array<Array<number>> = [[...entrance, 0]];
  while (q.length) {
    let [y, x, step]:Array<number> = q.shift()!;
    if (maze[y][x] === '1') continue;
    maze[y][x] = '1';

    if (step !== 0 && (y === 0 || x === 0 || x === maze[0].length - 1 || y === maze.length - 1)) return step;
    
    let dy = [-1, 0, 1, 0];
    let dx = [0, 1, 0, -1];
    for (let i = 0; i < 4; i++) {
      if (y + dy[i] >= 0 && x + dx[i] >= 0 && y + dy[i] < maze.length && x + dx[i] < maze[0].length && maze[y+dy[i]][x+dx[i]] !== '+') {
        q.push([y+dy[i], x+dx[i], step+1]);
      }
    }
  }

  
  return -1;
};

// testcase

console.log(`answer: 7\nresponse: ${nearestExit([["+",".","+","+","+","+","+"],["+",".","+",".",".",".","+"],["+",".","+",".","+",".","+"],["+",".",".",".",".",".","+"],["+","+","+","+",".","+","."]],
[0,1])}`);