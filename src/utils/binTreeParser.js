import { INVALID_FORMAT } from "./constants"

export const parseBinaryTree = (treeArray) => {
  if (treeArray?.length > 3 || !treeArray[0]) {
    throw Error(INVALID_FORMAT)
  }
  const tree = {}
  treeArray.forEach((node, index) => {
    switch (index) {
      case 0:
        if (typeof node === "string" || typeof node === "number") {
          tree.id = node
        }
        break;
      case 1:
          tree.left = !!node ? parseBinaryTree(node) : null
        break;
      case 2:
          tree.right = !!node ? parseBinaryTree(node) : null
        break;
      default:
        break;
      }
  })
  return tree;
}