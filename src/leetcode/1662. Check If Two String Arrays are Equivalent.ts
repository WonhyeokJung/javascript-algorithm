/**
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
A string is represented by an array if the array elements concatenated in order forms the string.
 */

function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  return word1.join('') === word2.join('');
};

let [word1, word2]: Array<Array<string>> = [["abc", "d", "defg"], ["abcddefg"]];

console.log(arrayStringsAreEqual(word1, word2));