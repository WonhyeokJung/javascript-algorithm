// Given the root of a binary tree and an integer targetSum, 
// return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
// A leaf is a node with no children.

// Binary Tree Traversal - Preorder
import { TreeNode } from './0000. utils';
var hasPathSum = function(root: TreeNode | null, targetSum: number): boolean {
  const preorder = function(node: TreeNode | null, sum: number): boolean {
    if (!node) return false;
    sum += node.val;
    if (!(node.left || node.right)) {
      return sum === targetSum;
    }
    return preorder(node.left, sum) || preorder(node.right, sum);
  }
  
  return preorder(root, 0);
};

// recursion
function hasPathSum2(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  // check if leaf && targetSum - root.val === 0
  if (root.left === root.right && root.val === targetSum) return true;
  return hasPathSum2(root.left, targetSum - root.val) || hasPathSum2(root.right, targetSum - root.val);
};


// Test case
const treeNodeMaker:Function = function(arr:Array<number>, i:number): TreeNode|null {
  if (!arr.length) return null;
  let root:TreeNode | null = null;
  if (i < arr.length) {
    root = new TreeNode(arr[i]);
    root.left = treeNodeMaker(arr, 2*i + 1);
    root.right = treeNodeMaker(arr, 2*i + 2);
  }
  return root;
}

/** Input */
let nums: (number|null)[] = [5,4,8,11,null,13,4,7,2,null,null,null,1];
let targetSum: number = 22;

console.log('Input: [5,4,8,11,null,13,4,7,2,null,null,null,1], 22')
console.log('DFS: ', hasPathSum(treeNodeMaker(nums, 0), targetSum));
console.log('Recursion: ', hasPathSum2(treeNodeMaker(nums, 0), targetSum));
