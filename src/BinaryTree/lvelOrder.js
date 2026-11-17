class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

function levelOrder(root) {
  if (root === null) return;

  let queue = [root];

  while (queue.length > 0) {
    let curr = queue.shift();

    console.log(curr.data);

    if (curr.left !== null) {
      queue.push(curr.left);
    }

    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
}

let root = new Node(10);
root.left = new Node(11);
root.right = new Node(9);
root.left.left = new Node(7);
root.right.left = new Node(15);
root.right.right = new Node(8);

levelOrder(root);
