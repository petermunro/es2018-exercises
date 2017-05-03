
function makeASTNode(nodeType, nodeValue, options) {
  return {
    nodeType,
    nodeValue,
    [options.attributeProp]: options.attributeValue
  };
}

console.log(makeASTNode("Image", "starfish.png", {
  attributeProp: "className",
  attributeValue: "active"
}));
