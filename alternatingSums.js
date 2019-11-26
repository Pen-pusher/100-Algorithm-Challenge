// for a=[50,60,60,45,70],the output should be alternate(a)=[180, 105]




function alternate(a) {
    let even=0;
    let odd = 0;
        a.forEach((element,index) => {
             if(index % 2 == 0){
                even += element
        //  console.log(element);
     }
        else{
           odd += element;
        //  console.log(element);
     }
 });
    return [even, odd];

}

console.log(alternate([30, 20, 40, 50, 60]))