import buySellStock from ".";

test('buySellStock 1:', () => {
  expect(buySellStock([7, 1, 5, 3, 6, 4])).toBe(7);
});

test('buySellStock 2:', () => {
  expect(buySellStock([1, 2, 3, 4, 5])).toBe(4);
});

test('buySellStock 3:', () => {
  expect(buySellStock([7, 6, 4, 3, 2, 1])).toBe(0);
});

test('buySellStock 4:', () => {
  expect(buySellStock([1, 2, 3, 4, 5])).toBe(4);
});