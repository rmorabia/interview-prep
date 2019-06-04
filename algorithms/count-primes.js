// Leetcode: https://leetcode.com/problems/count-primes/
// Repl: https://repl.it/@rmorabia/RadTwitch6

// Solution #1: Inefficient BUT I THOUGHT OF IT MYSELF

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let countPrimes = 0
    if (n === 3) { return 1 }
    if (n > 3) { countPrimes = 2 }
    for (let i = (n - 1); i > 3; i--) {
      if (i % 2 !== 0) {
        let numOfDivisibles = 0
        for (let j = (i - 1); j > 1; j--) {
          if (i % j === 0) {
            numOfDivisibles++
          }
        }
        if (numOfDivisibles === 0) {
          countPrimes++
        }
      }
    }
    return countPrimes
};

// Solution #2: Sieve of Eratosthenes

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let array = []
  let primes = 0
  const sqRt = Math.floor(Math.sqrt(n))

  for (let i = 0; i < n; i++) {
    if (i > 1) {
      array.push(true)
    } else {
      array.push(false)
    }
  }

  for (let i = 2; i <= sqRt; i++) {
    if (array[i]) {
      for (let k = (i * i); k <= n; k = k + i) {
        array[k] = false
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      primes++
    }
  }

  return primes

};
