// Given an array of integers,replace all the occurences of elemToReplace with substitutionElem


function arrayReplace(inputArray,elemToReplace,substitutionElem) {
    inputArray.forEach((element,index ) => {
            if(element == elemToReplace){
                inputArray[index] = substitutionElem
            }
    });
    return inputArray;
}

console.log(arrayReplace([1,2,1],1,3))