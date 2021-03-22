const QueueStack = require("./queueStack");

function main() {
  const queue = new QueueStack();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  queue.dequeue();
}

main();
