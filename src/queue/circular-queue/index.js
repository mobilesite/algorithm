/**
 * https://leetcode-cn.com/problems/design-circular-queue/
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  // 用来保存数据长度为k的数据结构
  this.list = Array(k);
  // 队首指针
  this.front = 0;
  // 对尾指针
  this.rear = 0;
  // 队列长度
  this.capacity = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;
  this.list[this.rear] = value;
  // 因为是循环队列，当队尾指针指向队尾时，这时再插入一个元素，队尾指针应该移到队首
  this.rear = (this.rear + 1) % this.capacity;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  let el = this.list[this.front];
  this.list[this.front] = undefined;
  // 这里也和队尾一样，不要忘了取模
  this.front = (this.front + 1) % this.capacity;
  return el;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.list[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  let tmp = this.rear - 1;
  return this.list[tmp < 0 ? this.capacity - 1 : tmp];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  // 这里注意后一个条件
  return this.front === this.rear && this.list[this.front] === undefined;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  // 这里注意后一个条件
  return this.front === this.rear && this.list[this.front] !== undefined;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */