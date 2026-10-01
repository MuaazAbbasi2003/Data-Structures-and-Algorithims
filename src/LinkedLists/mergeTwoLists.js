class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
const node1 = new ListNode(1);
const node2 = new ListNode(3);
const node3 = new ListNode(5);
const node1new = new ListNode(2);
const node2new = new ListNode(4);
const node3new = new ListNode(6);

node1.next = node2;
node2.next = node3;
let head = node1;
node1new.next = node2new;
node2new.next = node3new;
let headnew = node1new;

function mergeLists(head, headnew) {
  let list1 = head;
  let list2 = headnew;
  if (head === null) {
    return headnew;
  }
  if (headnew === null) {
    return head;
  }
  let mergeHead = null;
  let last = null;
  while (list1 !== null && list2 !== null) {
    if (list1.value < list2.value) {
      if (last === null) {
        last = list1;
        mergeHead = last;
      } else {
        last.next = list1;
        last = last.next;
      }
      list1 = list1.next;
    } else {
      if (last === null) {
        last = list2;
        mergeHead = last;
      } else {
        last.next = list2;
        last = last.next;
      }
      list2 = list2.next;
    }
  }
  if (list1 !== null) {
    last.next = list1;
  } else {
    last.next = list2;
  }
  return mergeHead;
}
const hel = mergeLists(head, headnew);
console.log(hel);
