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
}

let list = new SinglyLinkedList()
