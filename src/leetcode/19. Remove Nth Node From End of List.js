/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

// 1. Slow & Fast
const removeNthFromEnd1 = function(head, n) {
  let [slow, fast] = [head, head];
  
  while (n > 0) {
    fast = fast.next;
    n -= 1;
  }
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  
  if (fast) {
    slow.next = slow.next.next;
  }
  else {
    head = head.next;
  }
  return head;
};

// 2. Use Array
 const removeNthFromEnd2 = function(head, n) {
  let temp = [];
  while (head) {
    temp.push(head.val);
    head = head.next;
  }
  temp = [...temp.slice(0, temp.length - n), ...temp.slice(temp.length - n + 1, temp.length)];
  if (!temp.length) return head;
  
  let res = new ListNode();
  head = res;
  while (temp.length) {
    res.next = new ListNode(temp[0]);
    temp.shift();
    res = res.next;
  }
  return head.next;
};

// 3. Mixed 1&2 with no array
const removeNthFromEnd3 = function(head, n) {
  let curr = head;
  let len = 0;

  while (curr) {
    curr = curr.next;
    len++;
  }

  if (len - n === 0) {
    head = head.next;
  } else {
    let prev;
    curr = head;
    while (len - n > 0) {
      prev = curr;
      curr = curr.next
      len--;
    }
    prev.next = curr.next;
  }
  return head;
}

// Example
/** 
 * input
 * [1,2,3,4,5]
 * 2
*/
let temp = new ListNode(0);
let head = temp;
let input = [1,2,3,4,5];
for (let i = 0; i < input.length; i++) {
  temp.next = new ListNode(input[i]);
  temp = temp.next;
}

let test1 = removeNthFromEnd1(head.next, 2);
let arr = [];
while (test1) {
  arr.push(test1.val);
  test1 = test1.next;
}
console.log('case 1[Array]:', arr);
