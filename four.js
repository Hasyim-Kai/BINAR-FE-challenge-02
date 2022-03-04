const isValidPassword = givenPassword => {
    if (givenPassword == null) {
        return `Error: input yg diberikan kosong`
    } else if (typeof givenPassword != 'string') {
        return `Error: Invalid data type. Parameter type must be string`
    } else if (typeof givenPassword == 'string') {
        if(givenPassword.length < 8){
            return false
        } else if(!/[A-Z]{1,}/.test(givenPassword)){
            return false
        } else if(!/[a-z]{1,}/.test(givenPassword)){
            return false
        } else if(!/[0-9]{1,}/.test(givenPassword)){
            return false
        } else {
            return true
        }
    }
}

console.log(isValidPassword('Meong2021'))
console.log(isValidPassword('meong2021'))
console.log(isValidPassword('@eong'))
console.log(isValidPassword('Meong2'))
console.log(isValidPassword(0))
console.log(isValidPassword())