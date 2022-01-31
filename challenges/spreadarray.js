function uniteUnique(...arr) {
 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    return [...new Set(arr.flat())]
}
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))