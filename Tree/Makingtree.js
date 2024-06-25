const tree = {
  title: "A",
  children: [
    {
      title: "B",
      children: [
        { title: "C" }, // leaf
      ],
    },
    { title: "D" }, // leaf
  ],
};

function treeTraversal2(node) {
  console.log("node", node.title);
  if (node.children) {
    node.children.forEach((child) => {
      treeTraversal2(child);
    });
  }
}
