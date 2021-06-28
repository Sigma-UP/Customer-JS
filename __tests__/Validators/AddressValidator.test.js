const { test, expect } = require("@jest/globals");
const Address = require("../../src/Address/address");
const AddressValidator = require("../../src/Validators/AddressValidator");
test("Should return country error", () => {
    let valErrors = AddressValidator( new Address({
        line: "Line1", 
        line2:"Line2", 
        type: 1, 
        city: "Denver",
        postalCode: "121212",
        state: "Washington",
        country: "USA" }));
  
    expect(valErrors[0]).toBe("Address country is wrong.");
  });
