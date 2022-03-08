const getSplitName = personName => {
    if (typeof personName != 'string') {
        return `Error: Invalid data type. Parameter type must be string`
    } else if (typeof personName == 'string') {
        let splittedName = personName.split(' ');
        let output = {firstName: null, middleName: null, lastName: null};

        if(splittedName.length === 1){
            output.firstName = splittedName[0]
            return output;
        } else if(splittedName.length === 2){
            output.firstName = splittedName[0]
            output.lastName = splittedName[1]
            return output;
        } else if(splittedName.length === 3){
            output.firstName = splittedName[0]
            output.middleName = splittedName[1]
            output.lastName = splittedName[2]
            return output;
        } else {
            return `Error: this Function is only for 3 character name`
        }
    }
}

console.log(getSplitName('Aldi Daniela Pranata'))
console.log(getSplitName('Dwi Kuncoro'))
console.log(getSplitName('Aurora'))
console.log(getSplitName('Aurora Aureliya Sukma Darma'))
console.log(getSplitName(0))