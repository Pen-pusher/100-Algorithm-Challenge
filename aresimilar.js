function areSimilar(a,b) {
    const c = [];
    let d  =[];
    if (a.toString() === b.toString()){
        return true;
    }
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
            c.push(a[i]);
            d.push(b[i])
        }
    }
    d = d.reverse();
     if(c.length === 2 && (c.toString() === d.toString())){
         return true;
     }
     return false;
}

console.log(areSimilar([1,2,3],[1,2,3]));
console.log(areSimilar([1, 2, 3], [1, 4, 3]));