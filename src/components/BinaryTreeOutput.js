import React from 'react'
import useAppContext from '../hooks/useAppContext'
import useBinaryTree from '../hooks/useBinaryTree'
import { BinaryTree } from './BinaryTree'

export const BinaryTreeOutput = () => {
  const {jsonBinTree} = useAppContext()
  const {maxLevel} = useBinaryTree(jsonBinTree)

  return (
    jsonBinTree && <div>
      <h1>Output</h1>
      <BinaryTree node={jsonBinTree} currentLevel={0} deepestLevel={maxLevel} />
    </div>
  )
}
