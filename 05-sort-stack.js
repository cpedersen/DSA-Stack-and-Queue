const Stack = require("./stack");
const { peek, isEmpty, display, sortStack } = require("./stackHelpers");

function main() {
  const testStack = new Stack();

  testStack.push(10);
  testStack.push(1);
  testStack.push(4);
  testStack.push(0);
  testStack.push(3);
  testStack.push(-1);
  testStack.push(7);

  return testStack;
}

display(sortStack(main()));
