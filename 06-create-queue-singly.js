const Queue = require("./queue");
const { peek, isEmpty, display } = require("./queueHelpers");

function main() {
  const starTrekQ = new Queue();

  starTrekQ.enqueue("Spock");
  starTrekQ.dequeue();
  starTrekQ.enqueue("Kirk");
  starTrekQ.enqueue("Uhura");
  starTrekQ.enqueue("Sulu");
  starTrekQ.enqueue("Checkov");

  return starTrekQ;
}

console.log("isEmpty?: ", isEmpty(main()));
console.log("What is at the top of the queue?: ", peek(main()));
console.log("Print queue: ");
console.log(display(main()));
