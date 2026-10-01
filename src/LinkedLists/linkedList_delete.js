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

function deleteAtIndex(head, index) {
  let current = head;
  let val = 0;

  if (index === 0) {
    head = head.next;
    return head;
  }
  while (index - 1 !== val) {
    val++;
    current = current.next;
  }
  current.next = current.next.next;

  return head;
}
const hel = deleteAtIndex(head, 1);

console.log(hel);
