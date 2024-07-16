function callNonExistentFunction(): void {
    try {
      // Attempt to call a non-existent function
      nonExistentFunction();
    } catch (error) {
      console.error("Custom Error: The function does not exist.");
    }
  }
  
  // Call the function
  callNonExistentFunction();