import React, { useCallback } from "react";
import JSONInput from 'react-json-editor-ajrm'

import { parseBinaryTree } from "../utils/binTreeParser";
import useAppContext from "../hooks/useAppContext";

export const FileContent = () => {
  const {jsonBinTree, setBinTree} = useAppContext()

  console.log(jsonBinTree)

  const handleBinTree = useCallback(
    ({json}) => {
      try {
        setBinTree(parseBinaryTree(JSON.parse(json)))
      } catch (error) {
        console.error(error)
      }
    },
    [setBinTree],
  )

  return (
    <JSONInput
      onChange={handleBinTree}
      placeholder={jsonBinTree}
    />
  )
}
