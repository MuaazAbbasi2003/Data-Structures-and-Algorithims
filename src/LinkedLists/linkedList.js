class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;

const head = node1;

function insertAtIndex(head, value, index) {
  let current = head;
  const newNode = new ListNode(value);
  let val = 0;

  if (index === 0) {
    newNode.next = head;
    head = newNode;
    return head;
  }
  while (index - 1 !== val) {
    val++;
    current = current.next;
  }
  newNode.next = current.next;
  current.next = newNode;

  return head;
}
const hel = insertAtIndex(head, 15, 0);

console.log(hel);
