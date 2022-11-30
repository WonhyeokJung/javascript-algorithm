// Set
const uniqueOccurrences = function(arr:Array<number>):boolean {
  let map:{ [key: string]:number } = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) map[arr[i]] += 1;
    else map[arr[i]] = 1;
  }
  return Object.values(map).length === new Set(Object.values(map)).size
};

// testcase
console.log(`answer: true\nresult: ${uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])}`);