/**
 * https://leetcode-cn.com/problems/super-ugly-number/
 */
// 方法1：直接用数组的find方法
// class SuperUglyNumber {
//   constructor(primes) {
//     this.primes = primes;
//   }

//   getNth(n) {
//     // 超级丑数列表
//     // 因为题目中已经说明：1 不含质因数，因此它的所有质因数都在质数数组 primes 中。
//     // 所以我们默认将1置入
//     const res = [1];

//     // 从2开始找超级丑数
//     let i = 2;
//     let primes = this.primes;

//     while (res.length < n) {
//       // 拿到质因数列表
//       const arr = SuperUglyNumber.getPrimes(i);
//       let k = 0;
//       let len = arr.length;
//       for(; k < len; k++) {
//         if (!primes.find(item => item === arr[k])) {
//           break;
//         }
//       }
//       // k === len存在两种情况
//       if (k === len) {
//         if (len === 0) {
//           if (primes.find(item => item === i)) {
//             res.push(i);
//           }
//         } else {
//           res.push(i);
//         }
//       }

//       i++;
//     }

//     return res[n - 1];
//   }

//   // 计算指定正整数n的质因数
//   static getPrimes(n) {
//     const prime = (n) => {
//       // 存储所有的质因数
//       const arr = [];

//       for (let i = 2; i <= n/2; i++) {
//         // 是约数 且 是质数(递归计算得到)
//         if (n % i === 0 && !prime(i).length) {
//           arr.push(i);
//         }
//       }

//       return arr;
//     }

//     return prime(n);
//   }
// }

// export default function(n, primes) {
//   const num = new SuperUglyNumber(primes);
//   return num.getNth(n);
// };
// export {
//   SuperUglyNumber
// }

// 方法2：用堆查找替代数组查找
class Heap {
  constructor(arr) {
    this.data = arr;
    this.length = arr.length;
    this.generate();
  }
  /**
   * @param {*} arr 数据数组
   * @param {*} i 哪个节点
   * @param {*} size 有效长度，因为每构建一次最大堆，要把最大值排除出去，我们用这个变量来判别。数组实际的元素我们是没有删除的，因为最后排好序还得返回出去
   */
  static maxHeapify(arr, i, size) {
    // 左子节点索引
    let left = i * 2 + 1;
    // 右子节点索引
    let right = i * 2 + 2;
    // 默认将父节点视为最大节点
    let largest = i;

    // 在父节点、左子节点、右子节点的比较中，得到三者中最大值的索引
    if (left <= size && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right <= size && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      // 交换最大值索引指向的元素内容到父节点上
      Heap.swap(arr, i, largest);
      // 因为交换之后这个子树可能不再是一个最大堆，所以需要重新递归
      Heap.maxHeapify(arr, largest, size);
    }
  }

  // 交换两个元素
  static swap(arr, a, b) {
    if (a === b) return;

    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  generate() {
    const arr = this.data;
    const len = arr.length;

    if (len <= 1) {
      return arr;
    } else {
      // 一次完整的构建最大堆的过程
      for (let i = Math.floor(len / 2); i >= 0; i--) {
        Heap.maxHeapify(arr, i, len);
      }

      return arr;
    }
  }

  /**
   * @param {*} val 要查找的值
   * @param {*} i 从哪个节点开始查找
   */
  find(val, i = 0) {
    const arr = this.data;
    if (val > arr[i] || i > this.length) {
      return false;
    } else if (val === arr[i]) {
      return val;
    } else {
      return this.find(val, i*2 + 1) || this.find(val, i*2 + 2);
    }
  }
}

class SuperUglyNumber {
  constructor(primes) {
    this.primes = new Heap(primes);
  }

  getNth(n) {
    // 超级丑数列表
    // 因为题目中已经说明：1 不含质因数，因此它的所有质因数都在质数数组 primes 中。
    // 所以我们默认将1置入
    const res = [1];

    // 从2开始找超级丑数
    let i = 2;
    let primes = this.primes;

    while (res.length < n) {
      // 拿到质因数列表
      const arr = SuperUglyNumber.getPrimes(i);
      let k = 0;
      let len = arr.length;
      for(; k < len; k++) {
        if (!primes.find(arr[k])) {
          break;
        }
      }
      // k === len存在两种情况
      if (k === len) {
        if (len === 0) {
          if (primes.find(i)) {
            res.push(i);
          }
        } else {
          res.push(i);
        }
      }

      i++;
    }

    return res[n - 1];
  }

  // 计算指定正整数n的质因数
  static getPrimes(n) {
    const prime = (n) => {
      // 存储所有的质因数
      const arr = [];

      for (let i = 2; i <= n/2; i++) {
        // 是约数 且 是质数(递归计算得到)
        if (n % i === 0 && !prime(i).length) {
          arr.push(i);
        }
      }

      return arr;
    }

    return prime(n);
  }
}

export default function(n, primes) {
  const num = new SuperUglyNumber(primes);
  return num.getNth(n);
};
export {
  SuperUglyNumber
}

export {
  Heap
}