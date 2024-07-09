class MyClass {
    public display(data: string): number;
    public display(data: number): string;
    public display(data: any): any {
      if (typeof data === 'string') {
        return data.length;
      } else {
        return data.toString();
      }
    }
  }
  
  const object = new MyClass();
  console.log(object.display("TypeScript")); // Output: 10
  console.log(object.display(42)); // Output: "42"