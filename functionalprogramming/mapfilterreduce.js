const squareList = arr => {
  return arr.filter(item => (item > 0 && Number.isInteger(item))).map(v => v*v)
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);