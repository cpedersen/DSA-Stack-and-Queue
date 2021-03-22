const Stack = require("./stack");

function peek(stack) {
  if (!stack || !stack.top) {
    return "Error";
  }
  return stack.top.data;
}

function isEmpty(stack) {
  if (stack.top === null) {
    return true;
  }
  return false;
}

function display(stack) {
  if (isEmpty(stack)) {
    return "Error";
  }
  let node = stack.top;
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
}

function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reverse = new Stack();

  for (let i = 0; i < s.length; i++) {
    reverse.push(s[i]);
  }

  for (let j = 0; j < s.length; j++) {
    if (s[j] === reverse.pop()) {
      continue;
    } else {
      console.log(`${s} is not a palindrome`);
      return false;
    }
  }
  console.log(`${s} is a palindrome`);
  return true;
}

function checkParens(string) {
  let testStack = new Stack();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      testStack.push(i);
    }
    if (string[i] === ")") {
      if (isEmpty(testStack)) {
        return `Missing matching parens for ")" at position ${i}`;
      }
      testStack.pop();
    }
  }
  if (isEmpty(testStack)) {
    return `All parentheses have matches`;
  }
  return `Missing matching parens for "(" at position ${testStack.pop()}`;
}

function sortStack(stack) {
  let newStack = new Stack();
  while (!isEmpty(stack)) {
    let item = stack.pop();
    while (!isEmpty(newStack) && peek(newStack) < item) {
      stack.push(newStack.pop());
    }
    newStack.push(item);
  }
  return newStack;
}

module.exports = {
  peek,
  isEmpty,
  display,
  isPalindrome,
  checkParens,
  sortStack,
};
