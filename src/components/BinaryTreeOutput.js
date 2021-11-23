import React, { useEffect, useState } from 'react'
import useAppContext from '../hooks/useAppContext'
import useBinaryTree from '../hooks/useBinaryTree'
import { BinaryTree } from './BinaryTree'

export const BinaryTreeOutput = () => {
  const {jsonBinTree} = useAppContext()
  const {findDeepestNode} = useBinaryTree(jsonBinTree)
  const [deepestNode, setDeepestNode] = useState(null)

  useEffect(() => {
    if (jsonBinTree) {
      setDeepestNode(findDeepestNode(jsonBinTree, deepestNode))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jsonBinTree])

  return (
    jsonBinTree && <div className="flex flex-col items-center border-2 border-gray-300 rounded-sm shadow-md flex-1 mx-10">
      <h1>Output</h1>
      <BinaryTree node={jsonBinTree} currentLevel={0} deepestLevel={deepestNode} />
    </div>
  )
}
