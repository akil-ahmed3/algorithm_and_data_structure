class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++
    return this
  }

  pop() {
    if (this.length === 0) {
      return undefined
    }

    let pastTail = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = pastTail.prev
      this.tail.next = null
      pastTail.prev = null
    }
    this.length--

    return pastTail
  }

  shift() {
    if (!this.head) return undefined

    let oldHead = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }

    this.length--

    return oldHead
  }

  unshift(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  get(ind) {
    let val
    if (ind < 0 || ind >= this.length) {
      return null
    }
    if (Math.floor(this.length / 2) > ind) {
      console.log('From head')

      let count = 0
      val = this.head
      while (count !== ind) {
        val = val.next
        count++
      }
    } else {
      console.log('From tail')

      let count = this.length - 1
      val = this.tail
      while (count !== ind) {
        val = val.prev
        count--
      }
    }
    return val
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
}

let list = new DoublyLinkedList()

list.push('world')
list.push('worl')
list.push('wor')
list.push('wo')
