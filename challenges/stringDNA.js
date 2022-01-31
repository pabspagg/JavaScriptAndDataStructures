/*DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array

pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].*/

function pairElement(str) { 
    return str.split("").map(x=>arrayPair(x));
}
function arrayPair(str){
    switch (str) {
            case 'T': return ['T','A'] 
            break
            case 'A': return ['A','T']
            break
            case 'C': return ['C','G']
            break
            case 'G': return ['G','C']
            break
        }
}
  
  pairElement("GCG");