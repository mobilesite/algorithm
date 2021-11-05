import letterCombinations from "./index";

test('"23" to equal ["ad","ae","af","bd","be","bf","cd","ce","cf"]', () => {
  expect(letterCombinations('23')).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
});

// test('"2" to equal ["a", "b", "c"]', () => {
//   expect(letterCombinations('2')).toEqual(["a", "b", "c"]);
// });

// test('"" to equal []', () => {
//   expect(letterCombinations('')).toEqual([]);
// });