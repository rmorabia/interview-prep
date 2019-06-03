// Leetcode Problem: https://leetcode.com/problems/number-complement/
// Repl: https://repl.it/@rmorabia/RadTwitch5

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  const binaryNum = num.toString(2)
  const numArray = Array.from(binaryNum)
  const complement = numArray.map(e => e === '1' ? '0' : '1')
  const complementBinary = complement.join('')
  console.log(complementBinary)
  return parseInt(complementBinary, 2)  
};

