// two pointers
function removeDuplicates(nums: number[]): number {
  let cur:number = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i-1]) {
      nums[cur] = nums[i];
      cur += 1;
    }
  }
  return cur;
};

function removeDuplicates2(nums: number[]): number {
  let left:number = 0;
  let right:number = left + 1;
  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      left += 1;
      nums[left] = nums[right];
    }
    right += 1;
  }
  
  return left + 1;
};

// test case
console.log('expected answer: 5 ([0,1,2,3,4])\nuse for:', removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log('use while:', removeDuplicates2([0,0,1,1,1,2,2,3,3,4]));