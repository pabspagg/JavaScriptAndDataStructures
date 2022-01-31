function nonMutatingSplice(cities) {
    return cities.slice().slice(0,3);
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities)