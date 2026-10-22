var removeDuplicates = function (s) {
  const stack = [];

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (stack.length === 0) {
      stack.push(element);
    } else {
      const val = stack[stack.length - 1];
      if (val === element) {
        stack.pop();
      } else {
        stack.push(element);
      }
    }
  }
  return stack.join("");
};

const string = "aba";

const hel = removeDuplicates(string);
console.log(hel);
