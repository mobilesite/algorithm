import MyCircularQueue from ".";

test('should ', () => {
  const queue = new MyCircularQueue(4);
  expect(queue.enQueue(1)).toBe(true);
  expect(queue.isFull()).toBe(false);
  queue.enQueue(2);
  expect(queue.Front()).toBe(1);
  expect(queue.Rear()).toBe(2);
  expect(queue.deQueue()).toBe(1);
  queue.enQueue(2);
  queue.enQueue(3);
  expect(queue.Rear()).toBe(3);
  queue.enQueue(4);
  expect(queue.isFull()).toBe(true);
  expect(queue.enQueue(5)).toBe(false);
  queue.deQueue();
  expect(queue.enQueue(5)).toBe(true);
})
