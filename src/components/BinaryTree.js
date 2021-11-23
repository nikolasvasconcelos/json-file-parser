import React from 'react'
import useAppContext from '../hooks/useAppContext'
import useBinaryTree from '../hooks/useBinaryTree'

export const BinaryTree = ({node, leftNode, rightNode, currentLevel, deepestLevel}) => {
  const {jsonBinTree} = useAppContext()
  const {maxLevel} = useBinaryTree(jsonBinTree)

  const isDeepest = maxLevel === currentLevel
  // console.log(`D::`, isDeepest, maxLevel, currentLevel)

  return (
    <div>
      {`${node?.id ?? " "}`}
      {node?.left !== undefined && <BinaryTree deepestLevel={maxLevel} leftNode node={node.left} currentLevel={currentLevel + 1} />}
      {node?.right !== undefined && <BinaryTree deepestLevel={maxLevel} rightNode node={node.right} currentLevel={currentLevel + 1} />}
    </div>
  )
}
