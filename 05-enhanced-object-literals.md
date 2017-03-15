# Enhanced Object Literals

1. Compete the function below, replacing the `XXX` with a single expression. The function should return an object that looks like this:

        {
          nodeType: "Image",
          nodeValue: "starfish.png",
          className: "active",
        }


   This is the code for you to complete to generate the object above:

        function makeASTNode(nodeType, nodeValue, options) {
          return XXX;
        }

        console.log(makeASTNode("Image", "starfish.png", {
          attributeProp: "className",
          attributeValue: "active"
        }));
