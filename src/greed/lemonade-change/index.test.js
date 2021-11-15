import lemonadeChange from ".";

test('lemonadeChange 1:', () => {
  expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true);
});

test('lemonadeChange 2:', () => {
  expect(lemonadeChange([5, 5, 10, 10, 20])).toBe(false);
});

test('lemonadeChange 3:', () => {
  expect(lemonadeChange([5, 5, 10])).toBe(true);
});

test('lemonadeChange 1:', () => {
  expect(lemonadeChange([10, 10])).toBe(false);
});