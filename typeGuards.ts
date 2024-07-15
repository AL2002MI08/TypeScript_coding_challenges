
// Function 'printElement' that accepts an argument of type 'string | number'
function printElement(element: string | number): void {
    // Type guard to check if 'element' is a string
    if (typeof element === "string") {
      console.log("Element is a string:", element);
    }
    // Type guard to check if 'element' is a number
    else if (typeof element === "number") {
      console.log("Element is a number:", element);
    }
    // Default case
    else {
      console.log("Element is neither a string nor a number.");
    }
  }
  
  // Test the 'printElement' function
  printElement("TypeScript"); // Output: Element is a string: TypeScript
  printElement(200);      // Output: Element is a number: 200
//   printElement(false);    // Output: Element is neither a string nor a number.