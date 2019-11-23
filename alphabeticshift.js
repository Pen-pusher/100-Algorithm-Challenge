// given a string replace each its character by the nxt one  in the English alphabet (z would be replaced by a).

function alphabeticShift(input) {
    var array = object = {
        'a':'b','b':'c','c':'d',
        'd': 'e', 'e': 'f', 'f': 'g',
        'g': 'h', 'h': 'i', 'i': 'j',
        'j': 'k', 'k': 'l', 'l': 'm',
        'm': 'n', 'n': 'o', 'o': 'p',
        'p': 'q', 'q': 'r', 'r': 's',
        's': 't', 't': 'u', 'u': 'v',
        'v': 'w', 'w': 'x', 'x': 'y',
        'y':'z','z':'a'
    };
    let inputShifted = input.split('');
    for (let i = 0;  i < inputShifted.length; i++) {
        inputShifted[i] = array[inputShifted[i]];

        
    } 
   return inputShifted.join('')
    
}
console.log(alphabeticShift("crazy"))