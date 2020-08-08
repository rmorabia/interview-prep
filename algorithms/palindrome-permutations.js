// InterviewCake: https://www.interviewcake.com/question/javascript/permutation-palindrome?course=fc1&section=hashing-and-hash-tables

function hasPalindromePermutation(theString) {

  // Check if any permutation of the input is a palindrome
  const uniqueValues = new Set()
  
  for (let i = 0; i < theString.length; i++) {
    if (uniqueValues.has(theString[i])) {
      uniqueValues.delete(theString[i])
    } else {
      uniqueValues.add(theString[i])
    }
  }
  
  if (uniqueValues.size === 1 || uniqueValues.size === 0) {
    return true
  }

  return false;
}


















// Tests

let desc = 'permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
