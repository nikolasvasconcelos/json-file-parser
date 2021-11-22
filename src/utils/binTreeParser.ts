const binTree = (treeArray) => {
  const tree = {}
  if (treeArray?.lenght > 3) {
    return null
  }
  treeArray.forEach((node, index) => {
      switch (index) {
        case 0:
          tree['id'] = node
          break;
        case 1:
            tree['left'] = Array.isArray(node) ? binTree(node) : node[0]
          break;
        case 2:
            tree['righr'] = Array.isArray(node) ? binTree(node) : node[0]
          break;
        default:
          break;
      }
  })
  return tree;
}