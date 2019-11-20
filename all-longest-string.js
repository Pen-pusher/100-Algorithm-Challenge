function allLongestString(inputArray) {
    let longestLength = 0 ;
    const longestWord = [];
    inputArray.forEach(word => {
        longestLength = longestLength < word.length ? word.length : longestLength;

    });
    inputArray.forEach(word =>{
        if(word.length === longestLength){
            longestWord.push(word);

        }
    })

    return longestWord;

}

console.log(allLongestString(["abc","de","fgh"]));