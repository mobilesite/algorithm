/**
 * https://leetcode-cn.com/problems/sort-list/
 */
// 声明链表的节点
class Node {
  constructor (value) {
    this.val = value;
    this.next = undefined;
  }
}

/**
 * 在JavaScript中， 数组可以充当堆栈、 队列， 但不能充当链表，
 我们必须自己声明一个数据结构来表示它
 声明链表的数据结构
 */
class Chain {
  constructor(arr) {
    // 声明链表的头部节点
    // 注意：下面这几句稍微有点儿绕，要好好理解
    let head = new Node(arr.shift());
    let next = head;
    arr.forEach(item => {
      next.next = new Node(item);
      next = next.next;
    });

    // 这句重要，会覆盖默认的返回的Chain实例
    return head;
  }
}

// 交换两个节点的值
const swap = (p, q) => {
  const tmp = p.val;
  p.val = q.val;
  q.val = tmp;
}

// 选择第一个元素作为基准元素，进行排序，将小于基准元素的放在其前面，大于基准元素的放在其右边，最后返回指向排序后基准元素的指针
const partion = (start, end) => {
  // 选择第一个元素为基准元素
  const val = start.val;

  let p = start;
  let q = start.next;
  while(q !== end) {
    if (q.val < val) {
      swap(p.next, q);
      p = p.next;
      // 上面这两句等价于
      // p = p.next;
      // swap(p, q);
    }
    q = q.next;
  }
  // 将基准元素和p指针所指向的元素进行交换
  swap(p, start);

  return p;
}


export default function sort(start, end) {
  if (start !== end) {
    const part = partion(start, end);
    sort(start, part);
    sort(part.next, end);
  }
}

export {
  Node,
  Chain,
}
