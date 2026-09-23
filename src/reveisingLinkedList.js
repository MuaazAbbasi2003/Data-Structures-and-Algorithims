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

function reverseList(head) {
  let previous = null;
  let current = head;

  while (current !== null) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  head = previous;
  return head;
}
const hel = reverseList(head);

console.log(hel);
