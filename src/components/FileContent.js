import React, { useCallback, useEffect } from "react";
import JSONInput from 'react-json-editor-ajrm'

import { jsonToBinaryTree } from "../utils/binaryTreeUtils";
import useAppContext from "../hooks/useAppContext";
import useBinaryTree from "../hooks/useBinaryTree";

export const FileContent = () => {
  const {jsonBinTree, setBinTree} = useAppContext()
  const {deepestNode, findMaxDepth} = useBinaryTree(jsonBinTree)

  useEffect(() => {
    if (jsonBinTree) {
      findMaxDepth(jsonBinTree)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jsonBinTree])

  const handleBinTree = useCallback(
    ({json}) => {
      try {
        setBinTree(jsonToBinaryTree(JSON.parse(json)))
      } catch (error) {
        console.error(`Parsing`, error)
      }
    },
    [setBinTree],
  )

  return (
    <div className="flex flex-col item-center flex-1 mx-10">
      {jsonBinTree && <JSONInput
        onBlur={handleBinTree}
        onChange={handleBinTree}
        placeholder={jsonBinTree}
        height={deepestNode?.level * 200}
        width="100%"
      />}
    </div>
  )
}
