function sliceArray(anim, beginSlice, endSlice) {
    let newarr = anim.slice() // retorna uma cópia do array
    return newarr.slice(beginSlice,endSlice)
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);