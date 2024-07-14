// Define an interface 'Car' with 'make' and 'model' properties of type 'string'
interface Car {
    make: string;
    model: string;
  }
  
  // Define a type 'Bus' with 'make' and 'model' properties of type 'string' and 'payloadCapacity' of type 'number'
  type Bus = {
    make: string;
    model: string;
    payloadCapacity: number;
  };
  
  // Create a type 'Vehicle' that represents either a 'Car' or a 'Bus' using a union type
  type Vehicle = Car | Bus;
  
  // Create instances of 'Car' and 'Bus'
  const car: Car = { make: "Audi", model: "A4" };
  const bus: Bus = { make: "Vovo", model: "XC60", payloadCapacity: 20 };
  
  // Create an array of 'Vehicle' type
  const vehicles: Vehicle[] = [car, bus];
  
  // Iterate through the 'vehicles' array and print details
  vehicles.forEach((vehicle) => {
    console.log(`Make: ${vehicle.make}`);
    console.log(`Model: ${vehicle.model}`);
    if ("payloadCapacity" in vehicle) {
      console.log(`Payload Capacity: ${vehicle.payloadCapacity}`);
    }
    console.log("--------");
  });