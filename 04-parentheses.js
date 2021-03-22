const Stack = require("./stack");
const { checkParens } = require("./stackHelpers");

const test1 = "(1 + (2 * 3)";
console.log("Input: ", test1);
console.log(checkParens(test1));

const test2 = "1 + (2 * 3))";
console.log("Input: ", test2);
console.log(checkParens(test2));

const test3 = "1 + 2 * 3)";
console.log("Input: ", test3);
console.log(checkParens(test3));

const test4 = "1 + (2 * 3";
console.log("Input: ", test4);
console.log(checkParens(test4));
