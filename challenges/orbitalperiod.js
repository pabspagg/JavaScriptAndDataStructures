/* Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) 
should return [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) 
should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]. */

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris

/* function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr.map(function(el){
      return {name:el.name,
              orbitalPeriod:Math.round((2*Math.PI)*Math.sqrt(Math.pow(earthRadius+el.avgAlt,3)/GM))
      }
    });
  } */

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let alts = arr.map(item => item.avgAlt).map(b => Math.round(2 * Math.PI * Math.sqrt((Math.pow(earthRadius + b, 3)) / GM)))
    for (let i = 0; i < alts.length; i++) {
        delete arr[i].avgAlt
        arr[i].orbitalPeriod = alts[i]
        console.log(arr[i])
    }
    return arr
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])