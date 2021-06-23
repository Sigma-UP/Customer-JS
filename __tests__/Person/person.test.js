const { test, expect } = require("@jest/globals");
const Person = require("../../src/Person/person");

test("Should create Person", () => {
    const person = new Person({
        firstName: "John", 
        lastName: "Wick", 
        });
  
    expect(person.firstName).toBe("John");
    expect(person.lastName).toBe("Wick");
  });
