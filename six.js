const getAngkaTerbesarKedua = dataNumbers => {
    if (dataNumbers == null) {
        return `Error: input yg diberikan kosong`
    } else if (typeof dataNumbers != 'object') {
        return `Error: Invalid data type. Parameter type must be object`
    } else if (typeof dataNumbers == 'object') {
        // Sort the array
        dataNumbers.sort((a,b)=> a - b)
        // first we get the biggest number
        let biggestNumber = dataNumbers[dataNumbers.length - 1]
        let secondBiggestNumber = 0

        // loop from the back of array bcs the biggest number is in the last position in array
        counter = dataNumbers.length -1
        while(counter > 0){
            // then, once we found smaller number than biggest number, return the value and break the loop
            if(biggestNumber > dataNumbers[counter]){
                secondBiggestNumber = dataNumbers[counter]
                break
            }
            counter--
        }
        return secondBiggestNumber
    }
}

const dataAngka = [9,4,7,7,4,3,2,2,8]
console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())