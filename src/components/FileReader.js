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
        if (reader?.result) {
          setFileContent(reader.result)
        }
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
    <div className="flex flex-col items-center border-2 border-gray-300 rounded-sm p-5 w-min mx-auto">
      <h1 class="text-xl text-gray-900">Tree Source</h1>
      <div class="my-3 flex justify-center px-7 pt-5 pb-6">
        <div class="space-y-1 text-center">
          <div class="flex flex-col text-sm text-gray-600  mb-3">
            <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 ring-2 ring-offset-2 ring-indigo-500">
              <span className="text-center">Upload a file</span>
              <input id="file-upload" name="file-upload" type="file" class="sr-only" accept=".txt" onChange={handleUpload} />
            </label>
          </div>
          <p class="text-md text-gray-500">
          {fileContent ? `Content: ${fileContent}` : 'Only .txt files are accepted'}
          </p>
        </div>
      </div>
      <button className="py-5 px-32 w-16 h-10 my-3 flex items-center justify-center rounded bg-purple-700 hover:bg-purple-500 text-white" type="button" onClick={handleBinTree}>Fetch</button>
    </div>
  )
}

export default FileInput;