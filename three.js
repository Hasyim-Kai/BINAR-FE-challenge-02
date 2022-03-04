const checkEmail = email => {
    if (email == null) {
        return `Error: input yg diberikan kosong`
    } else if (typeof email != 'string') {
        return `Error: Invalid data type`
    } else if (typeof email == 'string') {
        if (!email.includes('@')) {
            return `input harus berformat email dengan menambahkan @`
        }
        const REGEX_EMAIL = /[\w]+@[a-z]+\.[a-z]/
        return REGEX_EMAIL.test(email) ? `VALID` : `INVALID`
    }
}

console.log(checkEmail('apranata@binar.co.id'))
console.log(checkEmail('apranata@binar.com'))
console.log(checkEmail('apranata@binar'))
console.log(checkEmail('apranata'))
console.log(checkEmail())
try {
    console.log(checkTypeNumber(checkEmail(3322)))
} catch (error) {
    console.log(`Error :  function checkTypeNumber isn't defined in this file`)
}