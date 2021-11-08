/**
 * https://leetcode-cn.com/problems/symmetric-tree/
 */
class Node {
  constructor (val) {
    this.val = val;
    this.left = undefined;
    this.right = undefined;
  }
}

class Tree {
  constructor (data) {
    // 临时存储所有节点，方便存照父子节点
    let nodeList = [];
    // 顶节点
    let root;

    for (let i = 0, len = data.length; i < len; i++) {
      const node = new Node(data[i]);

      nodeList.push(node);
      if (i > 0) {
        // // 算出节点属于哪一层【存疑】
        // let n = Math.floor(Math.sqrt(i + 1));
        // 感觉应该改成如下
        let n = Math.floor(Math.log2(i+1));
        // 记录当前层的起始点
        let q = Math.pow(2, n) - 1;
        // 记录上一层的起始点
        let p = Math.pow(2, n - 1) - 1;
        // 找到当前节点的父节点
        let parent = nodeList[p + Math.floor((i - q) / 2)];

        // 将当前节点和上一层的父节点做关联
        if (parent.left) {
          parent.right = node;
        } else {
          parent.left = node;
        }
      }
    }

    root = nodeList.shift();
    nodeList.length = 0;
    return root;
  }

  // 判断是否是镜像对称
  static isSymmetry (root) {
    if (!root) return true;

    const walk = (left, right) => {
      if (!left && !right) return true;
      if ((left && !right) || (!left && right) || (left.val !== right.val)) {
        return false;
      }

      // 递归
      return walk(left.left, right.right) && walk(left.right, right.left)
    }

    return walk(root.left, root.right);
  }
}

export default Tree;
export {
  Node
}
