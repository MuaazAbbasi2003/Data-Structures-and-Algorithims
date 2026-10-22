var removeDuplicates = function (string1, string2) {
  let stack1 = [];
  let stack2 = [];
  let len = string1.length > string2.length ? string1.length : string2.length;

  for (let index = 0; index < len; index++) {
    const charA = string1[index];
    const charB = string2[index];

    if (charA === "#") {
      stack1.pop();
    } else {
      if (charA !== undefined) {
        stack1.push(charA);
      }
    }

    if (charB === "#") {
      stack2.pop();
    } else {
      if (charB !== undefined) {
        stack2.push(charB);
      }
    }
  }

  return (
    stack1.length === stack2.length &&
    stack1.every((val, i) => val === stack2[i])
  );
};

const string1 = "ab#c";
const string2 = "ad#c";

const hel = removeDuplicates(string1, string2);
console.log(hel);
