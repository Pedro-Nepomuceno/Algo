// find the most frequent value
function inOrderDFS(self, node) {
  if (node == null) return;
}

// given an tree determine if the tree is balanced or not
// a tree is balanced if the height of the two subtree of every node never differ more than 1

function findTheHeight(root) {
  if (root == null) return;
  let left = findTheHeight(root.left);
  let right = findTheHeight(root.right);
  return max(left, right) + 1;
}
