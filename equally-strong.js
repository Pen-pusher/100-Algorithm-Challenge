function equal(yoursLeft,yoursRight,friendsleft,friendsRight) {
    const yourWeakest= yoursLeft <= yoursRight ?   yoursLeft : yoursRight ;
    const yourStrongest= yoursLeft >= yoursRight ? yoursLeft : yoursRight;
    const friendsWeakest =friendsleft <= friendsRight ? friendsleft : friendsRight;
    const friendsStrongest= friendsleft >= friendsRight ? friendsleft : friendsRight;
     
    return (yourStrongest === friendsStrongest && yourWeakest === friendsWeakest)
}
console.log(equal([1, 2, 1, 2]))


