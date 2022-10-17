import { ListNode } from './000.utils';

/**
  Do not return anything, modify it in-place instead.
 */

function deleteNode(root?: ListNode | null): void {
  if (root) {
    root.val = root.next?.val;
    root.next = root.next?.next;
  }
};