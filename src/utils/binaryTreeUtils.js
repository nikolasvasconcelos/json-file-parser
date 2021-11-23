import { INVALID_FORMAT } from "./constants"

export const arrayToBinaryTree = (treeArray) => {
  if (treeArray?.length > 3) {
    throw Error(INVALID_FORMAT)
  }
  let tree = {}
  console.log(`ARRAY:`,treeArray)
  treeArray.forEach((node, index) => {
    switch (index) {
      case 0:
        if (typeof node === "string" || typeof node === "number") {
          tree.id = node
        } else if (node === null) {
          tree = null
        }
        break;
      case 1:
          tree.left = !!node ? arrayToBinaryTree(node) : null
        break;
      case 2:
          tree.right = !!node ? arrayToBinaryTree(node) : null
        break;
      default:
        break;
      }
  })
  return tree;
}

export const jsonToBinaryTree = (jsonTree) => {
  console.log(jsonTree, Object.keys(jsonTree))
  if (Object.keys(jsonTree)?.length > 3) {
    throw Error(INVALID_FORMAT)
  }
  let tree = {}
  Object.values(jsonTree).forEach((node, index) => {
    console.log(node, index)
    switch (index) {
      case 0:
        if (typeof node === "string" || typeof node === "number") {
          tree.id = node
        } else if (node === null) {
          tree = null
        }
        break;
      case 1:
          tree.left = !!node ? jsonToBinaryTree(node) : null
        break;
      case 2:
          tree.right = !!node ? jsonToBinaryTree(node) : null
        break;
      default:
        break;
      }
  })
  return tree;
}