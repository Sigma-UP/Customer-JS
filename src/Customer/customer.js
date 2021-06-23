const Person = require("../../src/Person/person");
const Address = require("../../src/Address/address");

class Customer extends Person { 
    constructor(options) {
        super(options);    
        this.addresses = options.addresses;
        this.phone = options.phone;
        this.email = options.email;
        this.notes = options.notes;
        this.totalPurchasesAmount = options.totalPurchasesAmount;
        this.lastPurchaseDate = options.lastPurchaseDate;
    }
  }
  
  module.exports = Customer;
