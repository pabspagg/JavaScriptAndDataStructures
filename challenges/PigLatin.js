
/*Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.*/

/* Função mais elegante
function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }*/

function translatePigLatin(str) {
    let rv = /^[aeiou]/
    let rc= /^[^aeiou]{1,}/
     if( rv.test(str)){
       return str + "way" 
    }
    let letters = str.match(rc).toString()
    return str.substring(letters.length,str.length)+letters+"ay"
  }
  
  translatePigLatin("rhythm");
  translatePigLatin("paragraphs") 
  translatePigLatin("algorithm")
  translatePigLatin("rhythm")
  translatePigLatin("eight")