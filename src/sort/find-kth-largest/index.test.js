import findKthLargest from ".";

// test('should findKthLargest([3,2,1,5,6,4], 2) to equal 5', () => {
//   expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toEqual(5);
// });

// test('should findKthLargest([3,2,3,1,2,4,5,5,6], 4) to equal 4', () => {
//   expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toEqual(4);
// });

test('should findKthLargest([2, 1], 2) to equal 1', () => {
  expect(findKthLargest([2, 1], 2)).toEqual(1);
});

test('should findKthLargest([1], 1) to equal 1', () => {
  expect(findKthLargest([1], 1)).toEqual(1);
});
