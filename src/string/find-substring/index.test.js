import findSubstring from '.';

test('findSubstring 1:', () => {
  const s = 'barfoothefoobarman',
    words = ['foo', 'bar'];
  expect(findSubstring(s, words)).toEqual([0,9]);
});

test('findSubstring 1:', () => {
  const s = 'wordgoodgoodgoodbestword',
    words = ['word', 'good', 'best', 'word'];
  expect(findSubstring(s, words)).toEqual([]);
});

test('findSubstring 1:', () => {
  const s = 'barfoofoobarthefoobarman',
    words = ['bar', 'foo', 'the'];
  expect(findSubstring(s, words)).toEqual([6, 9, 12]);
});

