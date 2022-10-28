function increasingTriplet(nums: number[]): boolean {
  let [first, second]:[number, number] = [Infinity, Infinity];
  
  // 1. Keep 2 numbers first and second where first < second
  for (let third of nums) {
    if (second < third) return true;
    if (third <= first) first = third;
    else second = third;
  }
  
  // 2. alternative no.1
  for (let third of nums) {
    if (third <= first) first = third;
    else if (third <= second) second = third;
    else return true;
  }
  
  return false;
  
};