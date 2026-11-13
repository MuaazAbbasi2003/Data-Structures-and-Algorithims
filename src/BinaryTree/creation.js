class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
let firstNode = new Node(2);
let secondNode = new Node(3);
let thirdNode = new Node(4);
let fourthNode = new Node(5);

firstNode.left = secondNode;
firstNode.right = thirdNode;
secondNode.left = fourthNode;
