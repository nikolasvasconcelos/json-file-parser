import React, { useCallback } from "react";
import JSONInput from 'react-json-editor-ajrm'

import { arrayToBinaryTree } from "../utils/binaryTreeUtils";
import useAppContext from "../hooks/useAppContext";

export const FileContent = () => {
  const {jsonBinTree, setBinTree} = useAppContext()

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
    jsonBinTree && <JSONInput
      onChange={handleBinTree}
      placeholder={jsonBinTree}
    />
  )
}
