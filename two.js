const checkTypeNumber = givenNumber => {
    if(givenNumber == null){
        return `Error: Bro where is the parameter ? input kosong`
    } else if (typeof givenNumber != 'number'){   
        return `Error: Invalid data type`
    } else if(typeof givenNumber == 'number'){
        return givenNumber % 2 === 1 ? `GANJIL` : `GENAP`
    }
}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber('3'))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())