const StackQueue = require("./stackQueue");

function main() {
  const queue = new StackQueue();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  queue.dequeue();
}

main();
