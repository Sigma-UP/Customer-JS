const { test, expect } = require("@jest/globals");
const Customer = require("../../src/Customer/customer");
const Address = require("../../src/Address/address");

test("Should create Customer", () => {
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
    
    const customer = new Customer({
        firstName: "John", 
        lastName:"Wick", 
        addresses: [address1, address2], 
        phone: "+4567483",
        email: "amail@mail.ru",
        notes: ["one", "two"],
        totalPurchasesAmount: 0,
        lastPurchaseDate: "2020-2-2"
     });
        
    expect(customer.firstName).toBe("John");
    expect(customer.lastName).toBe("Wick");
    expect(customer.addresses[1].line).toBe("line1, address[1]");
    expect(customer.phone).toBe("+4567483");
    expect(customer.email).toBe("amail@mail.ru");
    expect(customer.notes[1]).toBe("two");
    expect(customer.totalPurchasesAmount).toBe(0);
    expect(customer.lastPurchaseDate).toBe("2020-2-2");
  });


//  First Name - optional, max 50 char (inherited property)
//Last Name - required, max 50 char  (inherited property)
//Addresses List of Address class (Generic Class), required at least 1 address
//Customer Phone Number - optional, accept only E.164 format
//Customer Email - optional, accept only email format (validate using Regex)
//Notes as List of text - Note cannot be empty, at least 1 note must be provided
//TotalPurchasesAmount - "money" type - can be null (write unit test)
//LastPurchaseDate - DateTime - can be null but not lower than 2020-1-1
