import React, { useEffect } from 'react'
import useAppContext from '../hooks/useAppContext'
import useBinaryTree from '../hooks/useBinaryTree'
import { BinaryTree } from './BinaryTree'

export const BinaryTreeOutput = () => {
  const {jsonBinTree} = useAppContext()
  const {maxLevel, findDeepestNode} = useBinaryTree(jsonBinTree)

  useEffect(() => {
    console.log(jsonBinTree)
    if (jsonBinTree) {
      findDeepestNode(jsonBinTree)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jsonBinTree])

  return (
    jsonBinTree && <div>
      <h1>Output</h1>
      <BinaryTree node={jsonBinTree} currentLevel={0} deepestLevel={maxLevel} />
    </div>
  )
}
