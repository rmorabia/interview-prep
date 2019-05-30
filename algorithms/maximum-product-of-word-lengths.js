// Leetcode: https://leetcode.com/problems/maximum-product-of-word-lengths/
// Repl: https://repl.it/@rmorabia/RadTwitch3

words = ["eae", "ea", "aaf", "bda", "fcf", "dc", "ac", "ce", "cefde", "dabae"]

/**
 * @param {string[]} words
 * @return {number}
 */

var maxProduct = (words) => {
  var setArray = []
  let biggestNumber = 0
  for (let i = 0; i < words.length; i++) {
    let set = new Set(words[i])
    setArray.push(set)
  }
  for (let z = 0; z < setArray.length; z++) {
    for (let r = z+1; r < setArray.length; r++) {
      let comparisonArray1 = Array.from(setArray[r])
      let comparisonArray2 = Array.from(setArray[z])
      let comparisonArray = comparisonArray1.concat(comparisonArray2)
      let comparisonSet = new Set(comparisonArray)

      if (comparisonArray.length === comparisonSet.size) {
        let currentMax = words[z].length * words[r].length
        if (currentMax > biggestNumber) {
          biggestNumber = currentMax
        }
      }

    }
  }
  return biggestNumber
}

maxProduct(words)
