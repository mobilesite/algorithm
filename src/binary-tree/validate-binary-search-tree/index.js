/**
 * https://leetcode-cn.com/problems/validate-binary-search-tree/
 */
class Node {
  constructor(val) {
    this.val = val;
    this.left = undefined;
    this.right = undefined;
  }
}

class Tree {
  constructor(data) {
    let root = new Node(data.shift());

    // 遍历所有的数据，逐渐插入到当前这棵搜索树中去
    data.forEach(item => {
      this.insert(root, item);
    });

    return root;
  }

  insert(node, data) {
    if (data < node.val) {
      // data < node.val则放到节点的左子树
      if (node.left === undefined) {
        node.left = new Node(data);
      } else {
        // 递归
        this.insert(node.left, data);
      }
    } else {
      // 否则放到节点的左子树
      if (node.right === undefined) {
        node.right = new Node(data);
      } else {
        // 递归
        this.insert(node.right, data);
      }
    }
  }

  static walk(root) {
    if (!root.left && !root.right) {
      return true;
    } else if ((root.left && root.val < root.left.val) || (root.right && root.val > root.right.val)) {
      return false;
    } else {
      return Tree.walk(root.left) && Tree.walk(root.right);
    }
  }
}

export default Tree;
export {
  Node
}