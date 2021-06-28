const { test, expect } = require("@jest/globals");
const Customer = require("../../src/Customer/customer");
const Address = require("../../src/Address/address");
const CustomerValidator = require("../../src/Validators/CustomerValidator");

const address1 = new Address({
    line: "Line1", 
    line2:"Line2", 
    type: "Shipping", 
    city: "Denver",
    postalCode: "121212",
    state: "Washington",
    country: "USA"
});

const address2 = new Address({
    line: "line1, address[1]", 
    line2:"Line2", 
    type: "Shipping", 
    city: "Denver",
    postalCode: "121212",
    state: "Washington",
    country: "USA"
});

test("Should return empty error list", () => {
    let valErrors = CustomerValidator( new Customer({        
            firstName: "", 
            lastName:"", 
            addresses: [address1, address2], 
            phone: "+45674434535345345",
            email: "amail@mail.ru",
            notes: ["one", "two"],
            totalPurchasesAmount: 0,
            lastPurchaseDate: "2020-2-2"
         }));
    expect(valErrors[0]).toBe("Last Name is empty.");
    expect(valErrors[1]).toBe("Phone is too long.");
  });
