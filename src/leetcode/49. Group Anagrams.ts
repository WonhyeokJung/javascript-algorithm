const groupAnagrams = function(strs:Array<string>):Array<Array<string>> {
  let map:Map<string, Array<string>> = new Map();
  for (let str of strs) {
    let temp:string = [...str].sort().join('');
    if (!map.has(temp)) map.set(temp, []);
    map.get(temp)!.push(str);
  }
  return [...map.values()];
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));