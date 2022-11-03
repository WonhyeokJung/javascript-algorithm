const longestPalindrome = function (words:Array<string>):number {
  let res:number = 0;
  let map:Map<string, number> = new Map();
  let map2:Map<string, number> = new Map();
  for (let w of words) {
    if (w[0] === w[1]) {
      if (!map2.has(w)) map2.set(w, 0);
      map2.set(w, map2.get(w)! + 1);
    } else {
      if (!map.has(w)) map.set(w, 0);
      map.set(w, map.get(w)! + 1);
    }
  } // for
  
  for (let [k, v] of map) {
    let reversed = [...k].reverse().join('');
    while (map.get(k)! > 0 && map.get(reversed)! > 0) {
      res += 4;
      map.set(k, map.get(k)! - 1);
      map.set(reversed, map.get(reversed)! - 1);
    } // while

  } // for
  
  let only = 0;
  for (let [k, v] of map2) {
    while (map2.get(k)! > 1) {
      res += 4;
      map2.set(k, map2.get(k)! - 2);
    } // while
      
    if (only === 0 && map2.get(k) === 1) {
      only += 2;
    } // inner if 2
  } // for
  return res + only;
};

// testcase
console.time('1');
console.log('expected response is: 212\nResponse is:', 
  longestPalindrome(["lg","lc","cg","gg",
    "gg","lc","cl","gg","gg",
    "cg","gg","lc","gg","gl",
    "lc","cg","cg","lg","gg",
    "cg","lg","lg","gg","gg",
    "cl","gl","gg","gg","cl",
    "gg","lc","gg","gg","gc",
    "gc","gc","gc","gg","lc",
    "gc","gg","gc","gg","gl",
    "lc","gg","lg","cg","cg",
    "gl","lg","gc","cl","cl",
    "gg","gg","cl","gg","gg",
    "lg","cl","cg","gc","gg",
    "lg","cl","gl","cl","gc",
    "lg","gg","gg","lc","gc",
    "gc","gl","gg","cg","gg",
    "gg","lc","gg","gl","lg",
    "cg","lg","gg","gg","cg",
    "lg","lg","lg","gg","gg",
    "cl","gc","gg","gg","cg",
    "gg","lc","gg","cl","gg",
    "gg","gc","gc","lg","gg",
    "gg","lg","cl","gc","gl",
    "gg","gg","gg","cg","cl"])
);
console.timeEnd('1');