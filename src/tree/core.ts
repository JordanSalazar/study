type TreeValue = number

class TreeNode {
  value: TreeValue
  children: TreeNode[]

  constructor(value: TreeValue, children?: TreeNode[]) {
    this.value = value
    this.children = children || []
  }
}

export const root = new TreeNode(1)

export const traverse = (
  startNode: TreeNode = root,
  callback: Function,
): void => {
  const walk = (node: TreeNode) => {
    callback(node)
    node.children.forEach(child => walk(child))
  }
  walk(startNode)
}

export const find = (startNode: TreeNode = root, value: TreeValue) => {
  let found: TreeNode | null = null

  traverse(startNode, (node: TreeNode) => {
    if (node.value === value) {
      found = node
    }
  })

  return found
}

export const add = (
  startNode: TreeNode = root,
  parentValue: TreeValue,
  value: TreeValue,
) => {
  traverse(startNode, (node: TreeNode) => {
    if (node.value === parentValue) {
      node.children.push(new TreeNode(value))
    }
  })
}

// export const remove = (startNode: TreeNode, )
