function minWindow(s: string, t: string): string {
  let [n, cnt] = [s.length, t.length];
  let [begin, end, head] = [0, 0, 0];

  let min = n + 1;

  let map:Map<string, number> = new Map();
  for (let c of t) {
    if (map.has(c)) map.set(c, map.get(c)! + 1);
    else map.set(c, 1);
  }

  while (end < s.length) {
    if (map.has(s[end])) {
      if (map.get(s[end])! > 0) {
        cnt -= 1;
      }
      map.set(s[end], map.get(s[end])! - 1);
    }
    end += 1;

    while (cnt === 0) {
      if ((end - begin) < min) {
        min = end - begin;
        head = begin;
      }
      if (map.has(s[begin])) {
        map.set(s[begin], map.get(s[begin])! + 1);
        if (map.get(s[begin])! > 0) {
          cnt += 1;
        }
      }
      begin += 1;
    }
  }
  
  if (min === n + 1) return '';
  return s.slice(head, head+min);
};

let [string, target]:(string|number)[] = ['ADOBECODEBANC', 'ABC'];

console.log(minWindow(string, target));