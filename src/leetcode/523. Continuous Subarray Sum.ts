/**
 * Given an integer array nums and an integer k, return true if nums has a continuous subarray of size at least two whose elements sum up to a multiple of k, or false otherwise.
 * An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
 */
function checkSubarraySum(nums: number[], k: number): boolean {
  let hash:Set<number> = new Set();
  let cur:number = 0;
  let pre:number = 0;
  for (let i = 0; i < nums.length; i++) {
    cur += nums[i];
    cur %= k;
    
    console.log(hash, cur);
    if (hash.has(cur)) return true;
    hash.add(pre);
    pre = cur;
  }
  return false;
};

/** 
 * 1. cur: 23 % 6 = 5, hash{ 0 }, pre = 5;
 * 2. cur: (5 + 2)%6 = 1, hash{ 0, 5 }, pre = 1;
 * 3. cur: (1 + 4)%6 = 5 => return true;
 * How does it work?
 * If hash has cur, it means there is continuous sub-array which equal to k.
*/
console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
/** 
 * 1. cur: 23 % 6 = 5, hash{ 0 }, pre = 5;
 * 2. cur: (5 + 2)%6 = 1, hash{ 0, 5 }, pre = 1;
 * 3. cur: (1 + 6)%6 = 1, hash{ 0, 5, 1 }, pre = 1;
 * 4. cur: (1 + 4)%6 = 5 => return true;
*/
console.log(checkSubarraySum([23, 2, 6, 4, 8], 6));