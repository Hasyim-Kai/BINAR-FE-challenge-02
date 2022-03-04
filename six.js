const getAngkaTerbesarKedua = dataNumbers => {
    if (dataNumbers == null) {
        return `Error: input yg diberikan kosong`
    } else if (typeof dataNumbers != 'object') {
        return `Error: Invalid data type. Parameter type must be object`
    } else if (typeof dataNumbers == 'object') {
        dataNumbers.sort((a,b)=> a - b)
        let secondBiggestNumber = 0

        counter = dataNumbers.length -1
        while(counter > 0){
            counter--
            if(dataNumbers[counter] > secondBiggestNumber){
                secondBiggestNumber = dataNumbers[counter]
                break
            }
        }
        return secondBiggestNumber
    }
}

const dataAngka = [9,4,7,7,4,3,2,2,8]
console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())