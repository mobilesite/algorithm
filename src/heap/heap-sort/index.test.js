import Heap from '.';

test('Heap 1:', () => {
  const heap = new Heap([1, 10, 9, 5, 3, 11]);
  expect(heap.sort()).toEqual([1,3,5,9,10,11]);
});
