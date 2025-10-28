// 1. Reverse a String
function reverseStr(input) {
  let reverseStr = '';
  for (let index in input) {
    reverseStr += input[input.length - 1 - index];
  }
  return reverseStr.toLowerCase();
  // return input.toLowerCase().split('').reverse().join('');
}

console.log(`Reverse a String: ${reverseStr('Hi hello')}`);
// 2. Check if a String is a Palindrome
function palindrome(input) {
  const reverseString = reverseStr(input);
  return reverseString === input.toLowerCase();
}
let str = 'Hiih';
console.log(`Check if a ${str} is a Palindrome: ${palindrome(str)}`);

// 3. Remove Duplicates from a String
function revmoveDuplicates(input) {
  let array = input;
  if (typeof input === 'string') {
    array = input.toLowerCase().split('');
  }
  return array.reduce((acc, val, index) => {
    if (array.lastIndexOf(val) === index && acc.indexOf(val) === -1) {
      acc.push(val);
    }
    return acc;
  }, []);
}
// str = 'Jeyabalan'
str = [1, 1, 2, 3, 5, 5, 5];
console.log(`Remove Duplicates from ${str}: ${revmoveDuplicates(str)}`);

// 4. Find the First Non-Repeating Character
function firstNonRepeatChar(input) {
  const array = input.toLowerCase().split('');
  for (let index in array) {
    let value = array[index];
    if (array.indexOf(value) === array.lastIndexOf(value)) {
      return value;
    }
  }
  return null;
}
str = 'aabc';
console.log(
  `Find the First Non-Repeating Character  ${str}: ${firstNonRepeatChar(str)}`
);

//5. Count the Occurrences of Each Character 
function 
