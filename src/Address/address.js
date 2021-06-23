class Address {
    constructor(options) {
      this.line = options.line;
      this.line2 = options.line2;
      this.type = options.type;
      this.city = options.city;
      this.postalCode = options.postalCode;
      this.state = options.state;
      this.country = options.country;
    }
  }
  
  module.exports = Address;
