class Heap {
  constructor(data) {
    this.data = data;
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

  sort() {
    const arr = this.data;
    const len = arr.length;

    if (len <= 1) {
      return arr;
    } else {
      // 一次完整的构建最大堆的过程
      for (let i = Math.floor(len / 2); i >= 0; i--) {
        Heap.maxHeapify(arr, i, len);
      }
      for (let j = 0; j < len; j++) {
        Heap.swap(arr, 0, len-1-j);
        Heap.maxHeapify(arr, 0, len-1-j-1);
      }

      return arr;
    }
  }
}

export default Heap;