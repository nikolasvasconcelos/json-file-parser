import { useCallback, useEffect, useState } from 'react';

const useBinaryTree = (binaryTree) => {
  const [maxLevel, setMaxLevel] = useState(-1)

  const findDeepestNode = useCallback(
    (root,level) => {
      if (root != null) {
        findDeepestNode(root.left, ++level);
      
        if (level > maxLevel) {
          console.log(level, maxLevel)
          setMaxLevel(level)
        }
        findDeepestNode(root.right, level);
      }
    },
    [maxLevel],
  )

  useEffect(() => {
    binaryTree && findDeepestNode(binaryTree, 0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [binaryTree])

  console.log(maxLevel)

  return { maxLevel };
};

export default useBinaryTree;