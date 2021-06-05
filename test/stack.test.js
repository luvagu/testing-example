class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.length = 0
  }

  peek() {
    if (this.length === 0) return null
    return this.top.value
  }

  push(value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      // this is root node
      this.top = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }

    this.length++
  }

  pop() {
    if (this.length <= 1) {
      this.top = null
    } else {
      const temp = this.top.next
      this.top = temp
    }

    this.length--

    return this.peek()
  }
}

describe('Stack Data Structure', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  it('is created empty', () => {
    expect(stack.top).toEqual(null)
    expect(stack.length).toBe(0)
  })

  it('can push new nodes on top of the stack', () => {
    stack.push('🥑')
    expect(stack.length).toBe(1)
    expect(stack.peek()).toBe('🥑')

    stack.push('🍎')
    expect(stack.length).toBeGreaterThan(1)
    expect(stack.length).toBe(2)
    expect(stack.peek()).toBe('🍎')
  })

  it('can pop off nodes', () => {
    stack.push('🥑')
    expect(stack.top).toEqual(new Node('🥑'))

    stack.push('🍎')
    expect(stack.peek()).toBe('🍎')
    expect(stack.length).toBe(2)

    stack.pop()
    expect(stack.length).toBe(1)
    expect(stack.peek()).toBe('🥑')

    stack.pop()
    expect(stack.length).toBe(0)
    expect(stack.peek()).toBe(null)
  })
})