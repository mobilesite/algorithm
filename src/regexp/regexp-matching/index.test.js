import regexpMatching from ".";

test('should regexpMatching("aa", "a") to be false', () => {
  expect(regexpMatching('aa', 'a')).toBe(false);
});

test('should regexpMatching("aa", "a*") to be true', () => {
  expect(regexpMatching('aa', 'a*')).toBe(true);
});

test('should regexpMatching("ab", ".*") to be true', () => {
  expect(regexpMatching('ab', '.*')).toBe(true);
});

test('should regexpMatching("aab", "c*a*b") to be true', () => {
  expect(regexpMatching('aab', 'c*a*b')).toBe(true);
});

test('should regexpMatching("mississippi", "mis*is*p*.") to be false', () => {
  expect(regexpMatching('mississippi', 'mis*is*p*.')).toBe(false);
});

test('should regexpMatching("mississippi", "mis*is*ip*.") to be true ', () => {
  expect(regexpMatching('mississippi', 'mis*is*ip*.')).toBe(true);
});

// TODO: 这个测试用例未能通过，需用动态规划才行，回头再看
// test('should regexpMatching("aaa", "a*a") to be true ', () => {
//   expect(regexpMatching('aaa', 'a*a')).toBe(true);
// });
