// while & for, n^2
function countAndSay(n: number): string {
  let i = 1;
  let curr = '';
  let res = '1';
  let temp = '';
  while (i < n) {
    for (let j = 0; j < res.length; j++) {
      if (j === 0) curr = res[0];
      else if (res[j] === res[j-1]) curr += res[j];
      else {
        temp += (curr.length + curr[0]);
        curr = res[j];
      }
    }
    if (curr) {
      temp += (curr.length + curr[0]);
      curr = '';
    }
    res = temp;
    temp = '';
    i++;
  }
  return res;
};