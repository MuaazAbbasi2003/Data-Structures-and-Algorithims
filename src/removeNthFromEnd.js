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
let head = node1;

function removeNthFromEnd(head, n) {
  let slow = head;
  let fast = head;
  let count = 0;
  while (count < n) {
    fast = fast.next;
    count++;
  }
  if (fast !== null) {
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
    }
    slow.next = slow.next.next;
  } else {
    head = head.next;
  }

  return head;
}

const hel = removeNthFromEnd(head, 2);

console.log(hel);
