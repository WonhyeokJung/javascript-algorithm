/**
  Given the root of a binary tree and two integers val and depth, add a row of nodes with value val at the given depth depth.
  Note that the root node is at depth 1.

  The adding rule is:
    Given the integer depth, for each not null tree node cur at the depth depth - 1, create two tree nodes with value val as cur's left subtree root and right subtree root.
    cur's original left subtree should be the left subtree of the new left subtree root.
    cur's original right subtree should be the right subtree of the new right subtree root.
    If depth == 1 that means there is no depth depth - 1 at all, then create a tree node with value val as the new root of the whole original tree, and the original tree is the new root's left subtree.
 */

// Tree Traversal : O(n)
import { TreeNode } from './0000. utils';
function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
  // O(n)
  if (depth === 1) {
    let res:TreeNode | null = new TreeNode(val);
    res.left = root;
    return res;
  }
  
  function preorder(node: TreeNode | null, dep: number, res: TreeNode): TreeNode | null {
    if (dep + 1 > depth) return null;
    if (dep + 1 === depth) {
      res.left = new TreeNode(val);
      res.right = new TreeNode(val);
      if (node?.left) res.left.left = node.left;
      if (node?.right) res.right.right = node.right;
      return res;
    } else {
      if (node?.left) {
        res.left = new TreeNode(node.left.val);
        preorder(node.left, dep+1, res.left);
      }
      if (node?.right) {
        res.right = new TreeNode(node.right.val);
        preorder(node.right, dep+1, res.right);
      }
    }
    return res;
  }
  
  return preorder(root, 1, new TreeNode(root?.val));
};

// Simple One
function addOneRow2(root: TreeNode | null, val: number, depth: number): TreeNode | null {
  if (depth === 1) return new TreeNode(val, root);
  
  function addNodeOnLevel(node: TreeNode | null, dep: number): TreeNode | null {
    if (node === null) return null;
    if (dep === depth - 1) {
      node.left = new TreeNode(val, node.left);
      node.right = new TreeNode(val, null, node.right);
    } else {
      addNodeOnLevel(node.left, dep + 1);
      addNodeOnLevel(node.right, dep + 1);
    }
    return root;
  }
  
  return addNodeOnLevel(root, 1);
};

// Test Case

let nums: Array<number> = [4,2,6,3,1,5];
let val = 1;
let depth = 2;

function makeTreeNode(arr:Array<number>, i:number): TreeNode | null {
  if (!arr.length) return null;
  let root:TreeNode | null = null;
  if (i < arr.length) {
    root = new TreeNode(arr[i]);
    root.left = makeTreeNode(arr, 2*i + 1);
    root.right = makeTreeNode(arr, 2*i + 2);
  }
  return root;
}

let root = makeTreeNode(nums, 0);
console.log('Tree Traversal no.1: ', addOneRow(root, val, depth));
root = makeTreeNode(nums, 0);
console.log('Tree Traversal no.2: ', addOneRow2(root, val, depth));
