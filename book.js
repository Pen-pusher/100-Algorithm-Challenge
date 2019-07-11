console.log(`welcome,${"piyush"}`)

 //favourite book add




//nsole.log(bookName[0])


function addFavouriteBook(bookName){
 if(!bookName.includes("gatsby")){
   favouriteBook.push(bookName);
 }

}

function printFavouriteBook(){
  console.log
 (`FavouriteBook: ${favouriteBook.length}`);
  for(let bookName of favouriteBook){
  console.log(bookName) ;
  }
}


 let favouriteBook  = [];

 addFavouriteBook("up above the sky") ;
 addFavouriteBook("up above the gatsby") ;
 addFavouriteBook("up above the heer") ;
 addFavouriteBook("up above the rino") ;

//console.log(favouriteBook)

 console.log(printFavouriteBook())




































 /*
var age = 18
function govote(agee){
  if(age >= 18){

    return "i will vote"
  }else
  {
    return "u r not eligible to vote";
  }

}

govote(age)


function greetStudents(students){

  return "hi" + students;
}

var students =["piyush", "nik" , "ujju" ]
//r(let i = 0; i < students.length;i++){
  //nsole.log(students[i])
   //reetStudents(students[i])
  //
console.log (typeof(students))

//r (let student of students){
//t stud = students.pop()
//eetStudents(stud)
//


while (students.length > 0){
  let student = students.shift();
  console.log(`Hello,${student}`)

}
*/
