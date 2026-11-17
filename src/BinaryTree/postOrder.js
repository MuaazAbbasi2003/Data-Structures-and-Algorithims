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
postOrder(root, res);

function postOrder(node, res) {
  if (node === null) {
    return;
  }

  postOrder(node.left, res);
  postOrder(node.right, res);
  res.push(node.data);
}
console.log(res.join(" "));
