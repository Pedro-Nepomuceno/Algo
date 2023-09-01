// write a function that takes a tree and a target value. and find what is the closest value to the target value

function findClosestValueBst(tree, target) {
	let closestValue = null;
	let minDiff = Infinity;
	let node = tree;

	while (node) {
		const diff = Math.abs(node.value - target);
		if (diff <= minDiff) {
			minDiff = diff;
			closestValue = node.value;
		}
		node = target < node.value ? node.left : node.right;
	}

	return closestValue;
}
