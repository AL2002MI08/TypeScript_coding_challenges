function logType(arg: string | number | boolean): void {
    if (typeof arg === "string") {
      console.log("Type: string");
    } else if (typeof arg === "number") {
      console.log("Type: number");
    } else if (typeof arg === "boolean") {
      console.log("Type: boolean");
    } else {
      console.log("Type: unknown");
    }
  }
  logType('hi')
