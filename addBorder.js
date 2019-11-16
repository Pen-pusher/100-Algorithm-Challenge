
// given a rectangular matrix of characters ,add a border of asterisks(*) to it

function addBorder(pic) {
    const lenghtOfWall = pic[0].length + 2;
    let wall = '';
    for(let i = 0 ; i < lenghtOfWall ; i++){
        wall =wall.concat('*');
    }
    pic.unshift(wall);
    pic.push(wall);
    for(let i = 1 ; i < pic.length - 1; i++){
        pic[i] = '*'.concat(pic[i],'*');
    }
    return pic;
}
// solution 2 using repeat

function addBorder(pic){
    const wall = '*'.repeat(pic[0].length + 2)
    pic.unshift(wall);
    pic.push(wall);
    for (let i = 1; i < pic.length - 1; i++) {
        pic[i] = '*'.concat(pic[i],'*');
    }
    return pic;
}

console.log(addBorder(["abc","def"]));