// Runtime: 135 ms, faster than 93.62% of TypeScript online submissions for Integer to Roman.
// Memory Usage: 50.8 MB, less than 22.55% of TypeScript online submissions for Integer to Roman.
function intToRoman(num: number): string {
  type objType = {
    [ index:string ]: string,
  }
  const roms:objType = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
  }

  let ans:string = '';
  while (num > 0) {
    let temp = Object.keys(roms);
    for (let i = temp.length - 1; i > -1; i--) {
      if (num - parseInt(temp[i], 10) >= 0) {
        ans += roms[temp[i]];
        num -= Number(temp[i]);
        break;
      }
    }
  }
  return ans;
};

console.log(intToRoman(1992));