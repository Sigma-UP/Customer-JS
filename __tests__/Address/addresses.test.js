const { test, expect } = require("@jest/globals");
const Address = require("../../src/Address/address");

test("Should create Address", () => {
    const address = new Address({
        line: "Line1", 
        line2:"Line2", 
        type: "Shipping", 
        city: "Denver",
        postalCode: "121212",
        state: "Washington",
        country: "USA" });
  
    expect(address.line).toBe("Line1");
    expect(address.line2).toBe("Line2");
    expect(address.type).toBe("Shipping");
    expect(address.city).toBe("Denver");
    expect(address.postalCode).toBe("121212");
    expect(address.state).toBe("Washington");
    expect(address.country).toBe("USA");
  });
