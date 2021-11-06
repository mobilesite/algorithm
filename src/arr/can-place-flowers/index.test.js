import canPlaceFlowers from ".";

test('can place flowers ([1,0,0,0,1], 1) to equal true', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
});

test('can place flowers ([1], 0) to equal true', () => {
  expect(canPlaceFlowers([1], 0)).toBe(true);
});

test('can place flowers ([1, 0, 0, 0, 1, 0, 0], 2) to equal true', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)).toBe(true);
});