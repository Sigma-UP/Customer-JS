function AddressValidator(address, pos = 0){
    let validationErrors = new Array();

    if(address.line.length == 0)
        validationErrors.push('Address ' + pos + ' line 1 is empty.');
    else if (address.line.length > 100)
        validationErrors.push('Address ' + pos + ' line 1 is too long.');
    
    if(address.line2.length == 0 || address.line2.length > 100)
        address.line2 = null;

    if(address.type != 1 && address.type != 2)
        validationErrors.push('Address ' + pos + ' type is wrong.');

    if(address.city.length == 0)
        validationErrors.push('Address ' + pos + ' city is empty.');
    else if (address.city.length > 50)
        validationErrors.push('Address ' + pos + ' city is too long.');

    if(address.postalCode.length == 0)
        validationErrors.push('Address ' + pos + ' postal code is empty.');
    else if (address.postalCode.length > 6)
        validationErrors.push('Address ' + pos + ' postal code is too long.');

    if(address.state.length == 0)
        validationErrors.push('Address ' + pos + ' state is empty.');
    else if (address.state.length > 20)
        validationErrors.push('Address ' + pos + ' state is too long.');

    if(address.country != 'United States' && address.country != 'Canada')
        validationErrors.push('Address country is wrong.')

    return validationErrors;
}

module.exports = AddressValidator
