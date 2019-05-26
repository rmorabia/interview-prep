// Leetcode Problme: https://leetcode.com/problems/reorder-log-files/
// Repl: https://repl.it/@rmorabia/RadTwitch2

// Notes
// Did not finish. Ended up going with Joseph's solution. 

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  const splitLogs = []
  const numberLogs = []
  const letterLogs = []
  const letterLogsConcat = []
  const identifiers = []
  const finalArray = []
  logs.forEach(element => {
    let splitString = element.split(' ')
    splitLogs.push(splitString)
  })
  splitLogs.forEach(element => {
    let num = isNaN(Number(element[1]))
    if (num === false) {
      numberLogs.push(element)
    } else {
      letterLogs.push(element)
    }
  }) 
  letterLogs.forEach(element => {
    identifiers.push(element.shift())
    let concatString = element.join(' ')
    letterLogsConcat.push(concatString)
  })
  letterLogsConcat.sort()
  letterLogsConcat.forEach((element, index) => {
    let currentString = ''
    if (element === letterLogsConcat[index + 1]) {
      if (identifiers[index] > identifiers[index + 1]) {
        finalArray.push(currentString.concat(identifiers[index], ' ', element))
      } else {
        finalArray.push(currentString.concat(identifiers[index + 1], ' ', letterLogsConcat[index + 1]))
      }
    } else {
      finalArray.push(currentString.concat(identifiers[index], ' ', element))
    }
  })
  numberLogs.forEach(element => {
    element.join(' ')
    finalArray.push(element)
  })

  return finalArray
};

reorderLogFiles(logs)

// Gave up here, read Joseph's solution: https://repl.it/@josephwhittingt/LemonchiffonBogusInstance