// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// • |a - x| < |b - x|, or
// • |a - x| == |b - x| and a < b

// Two Pointers
function findClosestElements(arr: number[], k: number, x: number): number[] {
  let [low, high] = [0, arr.length - k];
  while (low < high) {
    let mid = Math.floor((low + high)/2);
    // abs 구하기. ascending number이므로 low는 반대로 연산하면 양수값이다.
    // a < b는 항상 충족하므로, 둘이 같을때는 더 작은 값을 반환하는 특성상 high 값을 줄여준다.
    // low 조건 미충족시 low += 1, high의 경우 mid값으로 돌아온다.
    if (x - arr[low] > arr[mid+k] - x) {
      low += 1;
    } else {
      high = mid;
    }
  }
  // console.log(low, high);
  return arr.slice(low, low+k);
};