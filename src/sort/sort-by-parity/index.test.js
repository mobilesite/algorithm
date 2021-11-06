import sortByParity from ".";

test('should sortByParity([4,2,5,7]) equal to [2,5,4,7]', () => {
  expect(sortByParity([4, 2, 5, 7])).toEqual([2, 5, 4, 7]);
})
