import hasCycle, { Chain } from ".";

test('should to be true', () => {
  let head = new Chain([3, 2, 0, -4]);
  // 通过这种方式构造一个环
  head.next.next.next.next = head.next;
  expect(hasCycle(head)).toBe(true);
});

test('should to be false', () => {
  let head = new Chain([1, 3, 4, 6, 8, 9]);
  expect(hasCycle(head)).toBe(false);
});
