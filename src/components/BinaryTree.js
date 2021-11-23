import React, { useCallback } from 'react'

export const BinaryTree = ({node, leftNode, rightNode, currentLevel, deepestLevel}) => {

  const isDeepest = deepestLevel === node

  const getPosition = useCallback(
    () => {
      if (leftNode) {
        return 'self-start'
      } else if (rightNode) {
        return 'self-end'
      } else {
        return 'items-center'
      }
    },
    [leftNode, rightNode],
  )

  return (
    <div className={`flex flex-col text-center rounded-sm p-2 m-3 shadow-md ${getPosition()} ${isDeepest ? 'border-green-500 border-2' : ' border border-gray-300'}`}>
      {`${node?.id ?? " "}`}
      <div className="flex flex-row align-middle mx-auto">
        <div>
          {node?.left !== undefined && <BinaryTree deepestLevel={deepestLevel} leftNode node={node.left} currentLevel={currentLevel + 1} />}
        </div>
        <div>
          {node?.right !== undefined && <BinaryTree deepestLevel={deepestLevel} rightNode node={node.right} currentLevel={currentLevel + 1} />}
        </div>
      </div>
    </div>
  )
}
