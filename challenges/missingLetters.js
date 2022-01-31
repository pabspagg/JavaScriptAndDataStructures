/*Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

fearNotLetter("abce") should return the string d.

fearNotLetter("abcdefghjklmno") should return the string i.

fearNotLetter("stvwx") should return the string u.

fearNotLetter("bcdf") should return the string e.

fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.*/

function fearNotLetter(str) {
    let x = Array(str.length).fill().map((element, index) => String.fromCharCode(str.charCodeAt(0) + index))
    let z = str.split("")
    for(let i=0 ;i<z.length;i++){
      if(x[i] != z[i]) {      
        return x[i]
      }
    }
    return undefined
  }
  
  fearNotLetter("abce");