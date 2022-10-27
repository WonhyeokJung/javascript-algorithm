/**
  You are given two images, img1 and img2, represented as binary, square matrices of size n x n. A binary matrix has only 0s and 1s as values.
  We translate one image however we choose by sliding all the 1 bits left, right, up, and/or down any number of units. We then place it on top of the other image. We can then calculate the overlap by counting the number of positions that have a 1 in both images.
  Note also that a translation does not include any kind of rotation. Any 1 bits that are translated outside of the matrix borders are erased.
  Return the largest possible overlap.
 */
function largestOverlap(img1: number[][], img2: number[][]): number {
  let map:Map<string, number> = new Map();
  let res1:Array<Array<number>> = [];
  let res2:Array<Array<number>> = [];
  for (let i = 0; i < img1.length; i++) {
    for (let j = 0; j < img1[0].length; j++) {
      if (img1[i][j] === 1) res1.push([i, j]);
      if (img2[i][j] === 1) res2.push([i, j]);
    }
  }
  
  for (let co1 of res1) {
    for (let co2 of res2) {
      // co3 = 1이 있는 좌표를 다른 1이 있는 좌표까지 움직이면서 얼마만큼 움직였는지 체크한 값
      // 동일하게 움직인 횟수만큼 map[co3]에 +1 해서 몇개가 겹치는 지 체크.
      const co3:string = `${co2[0]-co1[0]}-${co2[1]-co1[1]}`;
      map.has(co3) ? map.set(co3, map.get(co3)! + 1) : map.set(co3, 1);
    }
  }
  return Math.max(...map.values(), 0);
};

// output: 3
console.log(largestOverlap([[1,1,0],[0,1,0],[0,1,0]], [[0,0,0],[0,1,1],[0,0,1]]));
