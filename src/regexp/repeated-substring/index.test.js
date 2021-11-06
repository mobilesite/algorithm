import repeatedSubstring from ".";

test('should repeatedSubstring("") to be false', () => {
  expect(repeatedSubstring("")).toBe(false);
});

test('should repeatedSubstring("a") to be false', () => {
  expect(repeatedSubstring("a")).toBe(false);
});

test('should repeatedSubstring("aa") to be false', () => {
  expect(repeatedSubstring("aa")).toBe(true);
});

test('should repeatedSubstring("ab") to be false', () => {
  expect(repeatedSubstring("ab")).toBe(false);
});

test('should repeatedSubstring("aba") to be false', () => {
  expect(repeatedSubstring("aba")).toBe(false);
});

test('should repeatedSubstring("abab") to be false', () => {
  expect(repeatedSubstring("abab")).toBe(true);
});

test('should repeatedSubstring("abcabc") to be true', () => {
  expect(repeatedSubstring("abcabc")).toBe(true);
});

test('should repeatedSubstring("ababab") to be false', () => {
  expect(repeatedSubstring("ababab")).toBe(true);
});

test('should repeatedSubstring("ababba") to be false', () => {
  expect(repeatedSubstring("ababba")).toBe(false);
});

test('should repeatedSubstring("abab") to be true', () => {
  expect(repeatedSubstring("abab")).toBe(true);
});