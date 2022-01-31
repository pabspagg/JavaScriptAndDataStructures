/* A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

sumPrimes(10) should return a number.

sumPrimes(10) should return 17.

sumPrimes(977) should return 73156.
 */
function sumPrimes(num) {
    if(num <=1) return 0
    let arr =[...Array(num+1).keys()].slice(2,num+1)
    console.log(arr)
    return arr
    .filter(x =>{
        for (let i = 2; i < x; i++) {
            if (x % i == 0) {
                return false
            }   
        }
        return true;
    })
    .reduce((a,b)=>a+b)
    ;
  }
  
  console.log(sumPrimes(10))
  console.log(sumPrimes(977));
  sumPrimes(977);