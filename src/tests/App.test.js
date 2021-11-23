// __tests__/fetch.test.js
import '@testing-library/jest-dom'
import {arrayToBinaryTree} from '../utils/binaryTreeUtils'

test('Converts string array to expected JSON object', async () => {
  const treeArray = '[1, [2], [3]]'
  const binaryTree = {
    id: 1,
    left: {
      id: 2
    },
    right: {
      id: 3
    }
  }
  expect(JSON.stringify(arrayToBinaryTree(JSON.parse(treeArray)))).toBe(JSON.stringify(binaryTree))
})