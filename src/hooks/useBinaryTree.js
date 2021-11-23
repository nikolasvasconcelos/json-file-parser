import { useState } from 'react';
import { DEFAULT_TREE_LEVEL } from '../utils/constants';

const useBinaryTree = () => {
  const [deepestNode, setDeepestNode] = useState(DEFAULT_TREE_LEVEL)

  const findNode = (node, deepest = DEFAULT_TREE_LEVEL, level = 0) => {
    if (node !== undefined) {
      if (level > deepest.level) {
        setDeepestNode({node: node?.id ?? null, level})
      }
  
      node?.left !== undefined && findNode(node.left, deepest, level + 1);
      node?.right !== undefined && findNode(node.right, deepest, level + 1);
    }
  
    return deepest.level;
  };

  return { maxLevel: deepestNode.level, findDeepestNode: findNode };
};

export default useBinaryTree;