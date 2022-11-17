// Math

/**
  Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.
  The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2).
  The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2).
*/

function computeArea(ax1: number, ay1: number, ax2: number, ay2: number, bx1: number, by1: number, bx2: number, by2: number): number {
  let totalArea:number = Math.abs(ax1 - ax2) * Math.abs(ay1 - ay2) + Math.abs(bx1 - bx2) * Math.abs(by1 - by2);
  const [left, right, top, bottom]:Array<number> = [Math.max(ax1, bx1), Math.min(ax2, bx2), Math.min(ay2, by2), Math.max(ay1, by1)];
  if (right > left && top > bottom) {
    totalArea -= (right - left) * (top - bottom);
  }
  return totalArea;
};

// testcase
console.log(`Expected Output: 45\nOutput: ${computeArea(-3, 0, 3, 4, 0, -1, 9, 2)}`);

