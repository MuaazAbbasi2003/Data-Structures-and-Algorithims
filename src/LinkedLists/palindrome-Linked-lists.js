class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(2);
const node5 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
let head = node1;

function isPalindrome(head) {
  let slow = head;
  let fast = head;
  if (head === null || head.next === null) {
    return true;
  }
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let secondHalf = slow.next;
  slow.next = null;
  let prev = null;
  let curr = secondHalf;
  while (curr !== null) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  let head2 = prev;
  let val1 = head;
  while (head2 !== null) {
    if (head2.value !== val1.value) {
      return false;
    } else {
      head2 = head2.next;
      val1 = val1.next;
    }
  }
  return true;
}

const hel = isPalindrome(head);

console.log(hel);
