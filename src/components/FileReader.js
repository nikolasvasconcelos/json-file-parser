import React, { useCallback, useState } from 'react'
import useAppContext from '../hooks/useAppContext'
import { arrayToBinaryTree } from '../utils/binaryTreeUtils'

const FileInput = () => {
  const {setBinTree} = useAppContext()
  const [fileContent, setFileContent] = useState()

  const handleUpload = useCallback(
    async ({target}) => {
      const file = target.files[0]
      const reader = new FileReader();
      await reader.readAsText(file)
      reader.onload = () => {
        setFileContent(reader.result)
      }
      reader.onerror = (error) => {
        console.error(error)
      }
    },
    [],
  )

  const handleBinTree = useCallback(() => {
    try {
      setBinTree(arrayToBinaryTree(JSON.parse(fileContent)))
    } catch (error) {
      console.error("Invalid content from file: ", error)
    }
  }, [fileContent, setBinTree])

  return (
    <div>
      <input type="file" accept=".txt" onChange={handleUpload} />
      <button type="button" onClick={handleBinTree}>Fetch</button>
    </div>
  )
}

export default FileInput;