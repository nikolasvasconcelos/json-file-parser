import React, { useState } from 'react'

const FileInput = () => {
  const [fileContent, setFileContent] = useState()

  const handleUpload = async ({target}) => {
    const file = target.files[0]
    const reader = new FileReader();
    await reader.readAsText(file)
    reader.onload = () => {
      setFileContent(reader.result)
    }
    reader.onerror = console.error('Failed')
  }

  return (
    <div>
      <input type="file" accept=".txt" onChange={handleUpload} />
      <button type="button" onClick={() => console.log(`F:`, fileContent)}>Fetch</button>
    </div>
  )
}

export default FileInput;