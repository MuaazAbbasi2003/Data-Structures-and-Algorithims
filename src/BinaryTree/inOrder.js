class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

const res = [];
inOrder(root, res);

function inOrder(node, res) {
  if (node === null) {
    return;
  }
  inOrder(node.left, res);
  res.push(node.data);
  inOrder(node.right, res);
}
console.log(res.join(" "));
