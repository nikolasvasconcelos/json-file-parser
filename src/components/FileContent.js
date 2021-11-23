import React, { useCallback, useEffect } from "react";
import JSONInput from 'react-json-editor-ajrm'

import { arrayToBinaryTree } from "../utils/binaryTreeUtils";
import useAppContext from "../hooks/useAppContext";
import useBinaryTree from "../hooks/useBinaryTree";

export const FileContent = () => {
  const {jsonBinTree, setBinTree} = useAppContext()
  const {maxLevel, findDeepestNode} = useBinaryTree(jsonBinTree)

  useEffect(() => {
    if (jsonBinTree) {
      findDeepestNode(jsonBinTree)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jsonBinTree])

  const handleBinTree = useCallback(
    ({json}) => {
      try {
        setBinTree(arrayToBinaryTree(JSON.parse(json)))
      } catch (error) {
        console.error(error)
      }
    },
    [setBinTree],
  )

  return (
    jsonBinTree && <div className="flex flex-col mx-auto w-min my-5">
      <JSONInput
        onBlur={handleBinTree}
        onChange={handleBinTree}
        placeholder={jsonBinTree}
        height={maxLevel * 175}
      />
    </div>
  )
}
