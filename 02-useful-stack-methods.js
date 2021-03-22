const Stack = require("./stack");
const { peek, isEmpty, display } = require("./stackHelpers");

function main() {
  const TestStack = new Stack();
  TestStack.push("Kirk");
  TestStack.push("Spock");
  TestStack.push("Scotty");
  TestStack.push("McCoy");
  TestStack.pop("McCoy");
  return TestStack;
}

console.log("isEmpty?: ", isEmpty(main()));
console.log(
  "What is at the top of the stack (should be Scotty)?: ",
  peek(main())
);
console.log("Print stack from top down: ");
console.log(display(main()));
