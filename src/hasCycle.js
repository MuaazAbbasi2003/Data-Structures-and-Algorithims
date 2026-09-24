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

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
}

const hel = hasCycle(head);

console.log(hel);
