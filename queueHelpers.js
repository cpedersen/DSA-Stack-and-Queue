const Queue = require("./queue");

function peek(queue) {
  if (!queue.first) {
    return "Error";
  }
  return queue.first.value;
}

function isEmpty(queue) {
  if (!queue.first) {
    return true;
  }
  return false;
}

function display(queue) {
  if (isEmpty(queue)) {
    return console.log("Error");
  }
  let currNode = queue.first;
  while (currNode.next !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
  console.log(currNode.value);
}

module.exports = {
  peek,
  isEmpty,
  display,
};
