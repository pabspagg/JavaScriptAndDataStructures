function addTogether() {
    const [x, y] = arguments;
    if (typeof(x) !== "number")
      return undefined;
    if (y === undefined)
      return (second) => addTogether(x, second);
    if (typeof(y) !== "number")
      return undefined;
    return x + y;
  }

  addTogether(2, 3)
  addTogether(2)([3])