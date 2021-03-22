const Stack = require("./stack");
const { peek, isEmpty, display } = require("./stackHelpers");

function main() {
  const starTrek = new Stack();
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  return starTrek;
}

console.log("isEmpty?: ", isEmpty(main()));
console.log("What is at the top of the stack?: ", peek(main()));
console.log("Print stack from top down: ");
console.log(display(main()));
