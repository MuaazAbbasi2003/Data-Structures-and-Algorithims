// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(value) {
//     this.items.push(value);
//   }
//   pop() {
//     return this.items.pop();
//   }
//   peek() {
//     return this.items[this.items.length - 1];
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
//   size() {
//     return this.items.length;
//   }
// }

// const stack = new Stack();

// stack.push(5);
// stack.push(10);
// stack.push(15);

// console.log(stack.size());

var isVlaid = function (string) {
  let stack = [];
  for (let index = 0; index < string.length; index++) {
    const char = string[index];
    const val = stack[stack.length - 1];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (
        (val === "(" && char === ")") ||
        (val === "[" && char === "]") ||
        (val === "{" && char === "}")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};
const string = "({[]})";
const hel = isVlaid(string);
console.log(hel);
