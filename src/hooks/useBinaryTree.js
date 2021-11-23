import { useState } from "react";
import { DEFAULT_TREE_LEVEL } from "../utils/constants";

const useBinaryTree = () => {
  const [deepestNode, setDeepestNode] = useState(DEFAULT_TREE_LEVEL)

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

    if (root == null) {
      return root
    }
  
    let leftDepth = getTreeDepth(root?.left);
    let rightDepth = getTreeDepth(root?.right);

    if (leftDepth > rightDepth) {
      nextNode = findNode(root?.left, nextNode);
    } else if (rightDepth > leftDepth) {
      nextNode = findNode(root?.right, nextNode);
    } else {
      return root;
    }

    return nextNode;
  }

  const findMaxDepth = (node, deepest = DEFAULT_TREE_LEVEL, level = 0) => {
    if (node !== undefined) {
      if (level > deepest.level) {
        setDeepestNode({node: node?.id ?? null, level})
      }

      node?.left !== undefined && findNode(node.left, deepest, level + 1);
      node?.right !== undefined && findNode(node.right, deepest, level + 1);
    }
    return deepest.level;
  };

  return { findDeepestNode: findNode, findMaxDepth, deepestNode };
};

export default useBinaryTree;