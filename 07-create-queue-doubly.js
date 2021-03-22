const DoubleQueue = require("./doubleQueue");
const { peek, isEmpty, display } = require("./queueHelpers");

function main() {
  const starTrekQ = new DoubleQueue();
  starTrekQ.enqueue("Kirk");
  starTrekQ.enqueue("Spock");
  starTrekQ.enqueue("Uhura");
  starTrekQ.enqueue("Sulu");
  starTrekQ.enqueue("Checkov");
  starTrekQ.dequeue();
  return starTrekQ;
}

console.log(main());
