const Customer = require("../../src/Customer/customer");
const AddressValidator = require( '../../src/Validators/AddressValidator');


function CustomerValidator(customer){
    let validationErrors = new Array();

    if(customer.firstName.length > 50)
        customer.firstName = null;

    if(customer.lastName.length == 0)
        validationErrors.push('Last Name is empty.');
    else if (customer.lastName.length > 50)
        validationErrors.push('Last Name is too long.');
    
    if(customer.addresses.length == 0)
        validationErrors.push('Addresses are empty.');
    else
    {
        let i = 0;
        customer.addresses.forEach(element => {
            AddressValidator(element, i);
            i++;
        });
    }

    if(customer.phone.length == 0)
        validationErrors.push('Phone is empty.');
    else if(customer.phone.length > 15)
        validationErrors.push('Phone is too long.');    

    if(customer.email.length == 0)
        validationErrors.push('Email is empty.');
    else if(customer.email.length > 100)
        validationErrors.push('Email is too long.');    

    if(customer.notes.length == 0)
        validationErrors.push('Notes are empty.');    

    return validationErrors;
}

module.exports = CustomerValidator;
