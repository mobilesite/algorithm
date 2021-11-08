import frequencySort from '.';

test('Heap 1:', () => {
  expect(frequencySort('tree')).toMatch(/eert|eetr/);
});
