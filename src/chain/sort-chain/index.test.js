import sort, {
  Chain
} from './';

test('should to equal [1, 2, 3, 4, 6, 7, 9, 10, 12]', () => {
  let head = new Chain([4, 1, 3, 2, 7, 9, 10, 12, 6]);
  sort(head);

  const res = [];
  let next = head;

  while(next) {
    res.push(next.val);
    next = next.next;
  }

  expect(res).toEqual([1, 2, 3, 4, 6, 7, 9, 10, 12]);
});
