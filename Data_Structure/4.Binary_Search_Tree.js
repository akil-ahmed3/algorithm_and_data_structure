class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    let newNode = new Node(val)
    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let current = this.root

      while (true) {
        if (val === current.value) return undefined
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        } else {
          if (current.right === null) {
            current.right = newNode
            return this
          } else {
            current = current.right
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) {
      return false
    }

    let current = this.root
    let found = false

    while (current && !found) {
      if (val < current.value) {
        current = current.left
      } else if (val > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    if (!current) {
      return false
    }
    return current
  }

  BFS() {
    let data = []
    let queue = []
    let node = this.root

    queue.push(this.root)

    while (queue.length) {
      node = queue.shift()
      data.push(node)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return data
  }

  DFSPreOrder() {
    let data = []
    let current = this.root

    function traverse(node) {
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(current)

    return data
  }

  DFSPostOrder() {
    let data = []
    let current = this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }

    traverse(current)

    return data
  }

  DFSInOrder() {
    let data = []
    let current = this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }

    traverse(current)

    return data
  }
}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(15)
tree.insert(11)
tree.insert(7)
tree.insert(9)
tree.insert(2)
