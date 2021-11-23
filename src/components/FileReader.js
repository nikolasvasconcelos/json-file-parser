import React, { useCallback, useState } from 'react'
import useAppContext from '../hooks/useAppContext'
import { parseBinaryTree } from '../utils/binTreeParser'

const FileInput = () => {
  const {setFileInput, setBinTree} = useAppContext()
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
      setBinTree(parseBinaryTree(JSON.parse(fileContent)))
      setFileInput(fileContent)
    } catch (error) {
      console.error("Invalid content from file")
    }
  }, [fileContent, setFileInput, setBinTree])

  return (
    <div>
      <input type="file" accept=".txt" onChange={handleUpload} />
      <button type="button" onClick={handleBinTree}>Fetch</button>
    </div>
  )
}

export default FileInput;