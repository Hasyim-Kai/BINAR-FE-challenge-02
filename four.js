// const isValidPassword = givenPassword => {
//     if (givenPassword == null) {
//         return `Error: input yg diberikan kosong`
//     } else if (typeof givenPassword != 'string') {
//         return `Error: Invalid data type`
//     } else if (typeof givenPassword == 'string') {
//         if (!givenPassword.includes('@')) {
//             return `input harus berformat givenPassword dengan menambahkan @`
//         }
//         const REGEX_EMAIL = /[\w]+@[a-z]+\.[a-z]/
//         return REGEX_EMAIL.test(givenPassword) ? `VALID` : `INVALID`
//     }
// }

// console.log(isValidPassword('apranata@binar.co.id'))
// console.log(isValidPassword('apranata@binar.com'))
// console.log(isValidPassword('apranata@binar'))
// console.log(isValidPassword('apranata'))
// console.log(isValidPassword())