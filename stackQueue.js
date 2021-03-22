class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return console.log(`pushed: ${this.top.data}`);
    }
    const node = new _Node(data, this.top);
    this.top = node;
    return console.log(`pushed: ${this.top.data}`);
  }

  pop() {
    if (this.top === null) {
      return `Bad Queue`;
    }
    let poppedItem = this.top;
    this.top = this.top.next;
    console.log(`popped: ${poppedItem.data}`);
    return poppedItem.data;
  }
}

class StackQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(item) {
    this.stack1.push(item);
  }

  dequeue() {
    if (this.stack2.top === null) {
      console.log("Stack 2 is null");
      if (this.stack1.top === null) return "Stack 1 is null";
      while (this.stack1.top !== null) {
        let currNode = this.stack1.pop();
        this.stack2.push(currNode);
      }
    }
    return this.stack2.pop();
  }
}

module.exports = StackQueue;
