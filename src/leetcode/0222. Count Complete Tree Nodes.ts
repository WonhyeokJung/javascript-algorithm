// DFS

import { TreeNode } from './0000. utils';
function countNodes(root: TreeNode | null): number {
  function dfs(node: TreeNode | null, cnt: number = 0): number {
    if (node === null) return cnt;
    cnt++;
    const numLeft = dfs(node.left);
    const numRight = dfs(node.right);
    return numLeft + numRight + cnt;
  }
  return dfs(root);
};

function makeTreeNode(arr: Array<number>, i: number = 0): TreeNode | null {
  if (!arr.length) return null;
  let root:TreeNode | null = null;
  if (i < arr.length) {
    root = new TreeNode(arr[i]);
    root.left = makeTreeNode(arr, 2*i + 1);
    root.right = makeTreeNode(arr, 2*i + 2);
  }
  return root;
}
// testcase
console.log(`answer: 6\nOutput: ${countNodes(makeTreeNode([1,2,3,4,5,6]))}`);