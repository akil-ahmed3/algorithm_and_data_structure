class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  push(val) {
    let newNode = new Node(val)

    if (this.head === null && this.tail === null) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++
    return this
  }

  pop() {
    if (!this.head) {
      return undefined
    } else {
      let current = this.head
      let newTail = current
      while (current.next) {
        newTail = current
        current = current.next
      }

      this.tail = newTail
      this.tail.next = null
      this.length--
    }
  }

  shift() {
    if (!this.head) return undefined

    let currentHead = this.head

    this.head = currentHead.next

    this.length--

    return currentHead
  }

  unshift(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  get(ind) {
    if (ind < 0 || ind > this.length) {
      return null
    } else {
      let count = 0
      let val = this.head
      while (count !== ind) {
        val = val.next
        count++
      }

      return val
    }
  }

  set(ind, val) {
    let currentVal = this.get(ind)

    if (!currentVal) {
      return false
    } else {
      currentVal.val = val
      return true
    }
  }

  insert(ind, val) {
    if (ind < 0 || ind > this.length) return false
    if (ind === this.length) return this.push(val)
    if (ind === 0) return this.unshift(val)

    let prev = this.get(ind - 1)
    let newNode = new Node(val)

    let temp = prev.next
    prev.next = newNode
    newNode.next = temp

    this.length++

    return this
  }

  remove(ind) {
    if (ind < 0 || ind >= this.length) return false
    if (ind === this.length - 1) return this.pop()
    if (ind === 0) return this.shift()

    let current = this.get(ind)
    this.get(ind - 1).next = this.get(ind + 1)
    current.next = null
    this.length--

    return current
  }

  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node

    let next
    let prev = null

    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }

    return this
  }
}

let list = new SinglyLinkedList()

list.push('world')
list.push('worl')
list.push('wor')
list.push('wo')
