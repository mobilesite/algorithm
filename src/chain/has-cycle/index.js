/**
 * https://leetcode-cn.com/problems/linked-list-cycle/
 */
class Node {
  constructor(value) {
    this.val = value;
    this.next = undefined;
  }
}

class Chain {
  constructor(arr) {
    // 注意：下面这几句稍微有点儿绕，要好好理解
    let head = new Node(arr.shift());
    let next = head;
    arr.forEach(item => {
      next.next = new Node(item);
      next = next.next;
    });

    return head;
  }
}

// 方法1：快慢指针法
// export default function(head) {
//   if (!head) return false;

//   let slow = head; // 慢指针
//   let fast = head.next; // 快指针

//   while(1) {
//     if (!fast || !fast.next) return false;
//     if (fast === slow || fast.next === slow) return true;
//     slow = slow.next;
//     fast = fast.next.next; // 快指针一次走两步
//   }
// }

// 方法2：哈希表法
export default function (head) {
  const map = [];

  while (head) {
    if (map.indexOf(head) > -1) return true;

    map.push(head);
    head = head.next;
  }
  
  return false;
}

export {
  Node,
  Chain
}