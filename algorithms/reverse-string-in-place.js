// InterviewCake Problem

function reverse(arrayOfChars) {

  if (arrayOfChars.length <= 1) { return arrayOfChars }
  const reversedArray = []
  for (let i = arrayOfChars.length - 1; i >= 0; i--) {
    reversedArray.push(arrayOfChars[i])
  }
  arrayOfChars.forEach((element, index) => arrayOfChars[index] = reversedArray[index])
  return arrayOfChars
}


















// Tests

let desc = 'empty string';
let input = ''.split('');
reverse(input);
let actual = input.join('');
let expected = '';
assertEqual(actual, expected, desc);

desc = 'single character string';
input = 'A'.split('');
reverse(input);
actual = input.join('');
expected = 'A';
assertEqual(actual, expected, desc);

desc = 'longer string';
input = 'ABCDE'.split('');
reverse(input);
actual = input.join('');
expected = 'EDCBA';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
