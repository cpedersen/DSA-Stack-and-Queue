class _Node {
  constructor(value) {
    this.data = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      node.prev = this.last;
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return "Error";
    }
    const oldFirst = this.first;
    this.first = this.first.next;
    if (oldFirst === this.last) {
      this.last === null;
    }
    this.first.prev = null;
    return oldFirst.value;
  }
}

module.exports = DoubleQueue;
