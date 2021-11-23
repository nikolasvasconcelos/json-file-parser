const useBinaryTree = () => {
  const getTreeDepth = (root) => {
    if (root === undefined) {
      return 0;
    }
    if (root?.left === undefined && root?.right === undefined) {
      return 1;
    }
    return Math.max(getTreeDepth(root.left), getTreeDepth(root.right)) + 1;
  }

  const findNode = (root, nextNode = null) => {
    if (root === undefined) {
      return nextNode;
    }
  
    let leftDepth = getTreeDepth(root.left);
    let rightDepth = getTreeDepth(root.right);

    if (leftDepth > rightDepth) {
      nextNode = findNode(root?.left, nextNode);
    } else if (rightDepth > leftDepth) {
      nextNode = findNode(root?.right, nextNode);
    } else {
      return root;
    }

    return nextNode;
}

  return { findDeepestNode: findNode };
};

export default useBinaryTree;