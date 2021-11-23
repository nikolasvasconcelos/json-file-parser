import React from 'react'

export const BinaryTree = ({node, leftNode, rightNode, currentLevel, deepestLevel}) => {

  const isDeepest = deepestLevel === currentLevel

  return (
    <div>
      {`${node?.id ?? " "}`}
      {node?.left !== undefined && <BinaryTree deepestLevel={deepestLevel} leftNode node={node.left} currentLevel={currentLevel + 1} />}
      {node?.right !== undefined && <BinaryTree deepestLevel={deepestLevel} rightNode node={node.right} currentLevel={currentLevel + 1} />}
    </div>
  )
}
